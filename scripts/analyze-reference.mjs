import fs from 'fs'
import path from 'path'

const htmlPath = path.join(process.cwd(), 'scraped_site', 'structure_clean.html')
const renderedPath = path.join(process.cwd(), 'scraped_site', 'rendered.html')

function extractFromHtml(fileContent) {
  const allMatches = []
  // match data-content JSON in script tags
  const regex = /data-content=['"](\{.+?\})['"]/g
  let match
  while ((match = regex.exec(fileContent)) !== null) {
    try {
      const decoded = match[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&')
      const parsed = JSON.parse(decoded)
      allMatches.push(parsed)
    } catch (e) {}
  }
  return allMatches
}

const content = fs.readFileSync(htmlPath, 'utf8')
const items = extractFromHtml(content)
console.log('Parsed data-content blocks:', items.length)

items.forEach((item, idx) => {
  const p = item.project || item
  if (p.pages) {
    console.log(`\n=== PROJECT: ${p.title || 'Untitled'} ===`)
    p.pages.forEach((page, pIdx) => {
      console.log(`\n--- Page ${pIdx + 1}: ${page.title} (URI: /${page.uri || ''}) ---`)
      console.log(`Height: ${page.height}px | Screenshot: ${page.screenshot}`)
      if (page.htmlUrl) console.log(`HTML Snippet URL: ${page.htmlUrl}`)
    })
  }
  if (p.textStyles?.project) {
    console.log('\n--- Text Styles in reference ---')
    p.textStyles.project.forEach(st => {
      console.log(`${st.label} (${st.tag}): ${st.cssProperties.fontFamily}, ${st.cssProperties.fontSize}px, weight ${st.cssProperties.fontWeight}, color #${st.cssProperties.color}, letterSpacing: ${st.cssProperties.letterSpacing}`)
    })
  }
  if (p.linkStyles?.project) {
    console.log('\n--- Link Styles ---')
    p.linkStyles.project.forEach(ls => {
      console.log(`${ls.label}: color #${ls.style.link?.textColor}, hover #${ls.style.hover?.textColor}`)
    })
  }
})
