const fs = require('fs')
const path = require('path')

// 1. Patch Pill component
const pillFile = path.resolve(__dirname, '../node_modules/@payloadcms/ui/dist/elements/Pill/index.js')
if (fs.existsSync(pillFile)) {
  let content = fs.readFileSync(pillFile, 'utf8')
  let modified = false

  if (content.includes('const t15 = isButton ? !isHydrated : undefined;')) {
    content = content.replace(
      'const t15 = isButton ? !isHydrated : undefined;',
      'const t15 = undefined;'
    )
    modified = true
  }

  if (content.includes('disabled: t15,') && !content.includes('suppressHydrationWarning: true,')) {
    content = content.replace(
      'disabled: t15,',
      'disabled: undefined,\n      suppressHydrationWarning: true,'
    )
    modified = true
  }

  if (modified) {
    fs.writeFileSync(pillFile, content, 'utf8')
    console.log('✅ Successfully patched @payloadcms/ui Pill component to prevent hydration mismatch.')
  } else {
    console.log('ℹ️ @payloadcms/ui Pill component already patched.')
  }
} else {
  console.log('⚠️ @payloadcms/ui Pill file not found (skipping patch).')
}

// 2. Patch Checkbox Input component
const checkboxFile = path.resolve(__dirname, '../node_modules/@payloadcms/ui/dist/fields/Checkbox/Input.js')
if (fs.existsSync(checkboxFile)) {
  let content = fs.readFileSync(checkboxFile, 'utf8')
  let modified = false

  if (content.includes('const readOnly = readOnlyFromProps || !isHydrated;')) {
    content = content.replace(
      'const readOnly = readOnlyFromProps || !isHydrated;',
      'const readOnly = Boolean(readOnlyFromProps);'
    )
    modified = true
  }

  if (content.includes('disabled: readOnly,') && !content.includes('suppressHydrationWarning: true,')) {
    content = content.replace(
      'disabled: readOnly,',
      'disabled: readOnly || undefined,\n      suppressHydrationWarning: true,'
    )
    modified = true
  }

  if (modified) {
    fs.writeFileSync(checkboxFile, content, 'utf8')
    console.log('✅ Successfully patched @payloadcms/ui Checkbox component to prevent hydration mismatch.')
  } else {
    console.log('ℹ️ @payloadcms/ui Checkbox component already patched.')
  }
} else {
  console.log('⚠️ @payloadcms/ui Checkbox file not found (skipping patch).')
}
