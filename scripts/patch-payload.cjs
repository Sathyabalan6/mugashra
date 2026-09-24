const fs = require('fs')
const path = require('path')

const targetFile = path.resolve(__dirname, '../node_modules/@payloadcms/ui/dist/elements/Pill/index.js')

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8')
  let modified = false

  // Replace client-only dynamic disabled mismatch
  if (content.includes('const t15 = isButton ? !isHydrated : undefined;')) {
    content = content.replace(
      'const t15 = isButton ? !isHydrated : undefined;',
      'const t15 = undefined;'
    )
    modified = true
  }

  // Add suppressHydrationWarning to element attributes
  if (content.includes('disabled: t15,') && !content.includes('suppressHydrationWarning: true,')) {
    content = content.replace(
      'disabled: t15,',
      'disabled: undefined,\n      suppressHydrationWarning: true,'
    )
    modified = true
  }

  if (modified) {
    fs.writeFileSync(targetFile, content, 'utf8')
    console.log('✅ Successfully patched @payloadcms/ui Pill component to prevent hydration mismatch.')
  } else {
    console.log('ℹ️ @payloadcms/ui Pill component already patched or modified.')
  }
} else {
  console.log('⚠️ @payloadcms/ui Pill file not found (skipping patch).')
}
