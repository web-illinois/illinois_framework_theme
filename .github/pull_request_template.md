## 📝 Description
*Provide a short summary that describes how the fix is implemented*

Fixes # (issue number)

---

## ✅ Peer Review Checklist
*Reviewers: Please verify the following before approving.*

- **The pull request links to the issue** it is addressing in the comment and in the "Development" section of the PR
- There is a **short summary** that describes _how_ the fix is implemented
- **Verifying work**: Verify that the changes made are addressing the linked issue
- **Accessibility**: Changes that might impact accessibility are reviewed to work with keyboard navigation and screen readers
- **Responsive**: Layout is tested on desktop, tablet, and mobile screens
- **Config changes**: Any configuration updates are tested and verified using the Distribution Update import
- **Security:** Output is sanitized (using `t()`, Twig auto-escaping, etc.). No secrects included (API keys, etc.)
- **Cleanliness:** All debug code (`ksm()`, `dpm()`, `console.log`) has been removed.
- **Comments:** Complex logic is explained inline.
- **Documentation:** Any relevant documentation has been updated (this can be a separate issue if needed)

---

## 📸 Screenshots / Video (Optional)
*If this is a UI change, please attach a screenshot or a quick screen recording of the change in action.*
