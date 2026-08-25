# Working with the site owner (non-coder)

The owner doesn't read code or diffs. Follow this workflow for every change
unless she explicitly says otherwise for a specific request:

1. **Never edit `main` directly.** Make the change on a separate branch first,
   so `main` (the live site) stays safe until she approves.
2. **Show the change, don't describe code:**
   - Visible changes (UI, layout, colors, new buttons/sections): take a
     before and after screenshot so she can compare them side by side.
   - Invisible changes (backend logic, caching, config, performance): skip
     the screenshot and describe the effect in plain English — what it does
     for her, not how it works (e.g. "this makes updates reach your phone
     automatically" rather than naming the service worker).
3. **Ask for approval in chat, not GitHub.** Ask a plain yes/no question in
   the conversation. Never send her to GitHub to review a diff or click
   merge.
4. **On yes:** merge the branch to `main` yourself. Don't wait for her to do
   it.

This is the default for all future work on this repo unless she specifies a
different process for a particular change.
