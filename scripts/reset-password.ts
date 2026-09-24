import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../payload.config'

async function resetPassword() {
  const payload = await getPayload({ config: configPromise })
  const newPassword = process.argv[2] || 'Mugaashra@2026'

  const users = await payload.find({
    collection: 'users',
    limit: 10,
  })

  if (users.docs.length === 0) {
    console.log('No users found in database.')
    return
  }

  for (const user of users.docs) {
    const updatedEmail = user.email.includes('@gmial.com')
      ? user.email.replace('@gmial.com', '@gmail.com')
      : user.email

    await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        email: updatedEmail,
        password: newPassword,
      },
    })
    console.log(`✅ User updated: Email is now "${updatedEmail}" (Password reset to "${newPassword}")`)
  }

  console.log(`\nNew password set to: ${newPassword}`)
}

resetPassword()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Error resetting password:', err)
    process.exit(1)
  })
