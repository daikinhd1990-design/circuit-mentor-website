# Circuit Mentor Website

A lightweight static website for the Circuit Mentor YouTube channel. Built with HTML, CSS and vanilla JavaScript; no paid hosting, framework or build step is required.

## Included
- Responsive English-language landing page
- YouTube channel subscribe links
- Embedded channel uploads playlist
- Searchable and filterable resource library
- MediaFire download links
- Sample resource records ready to edit

## 1. Add your MediaFire files
1. Upload each PCB, schematic, datasheet or project archive to MediaFire.
2. Copy its share link.
3. Open `resources.js`.
4. Replace the sample titles, descriptions, formats, dates and `url` values.
5. Add more objects by copying an existing object and changing its fields.
6. Commit and push the changes to GitHub; Cloudflare Pages will redeploy automatically.

Do not use a private MediaFire management URL. Use the public share/download link intended for viewers.

## 2. Preview locally
Open `index.html` in a browser. No installation is needed.

## 3. Publish with GitHub + Cloudflare Pages
1. Create a new GitHub repository, for example `circuit-mentor-website`.
2. Upload all files and folders in this package to the repository root.
3. In Cloudflare Dashboard, open **Workers & Pages**.
4. Choose **Create application → Pages → Connect to Git**.
5. Connect GitHub and select the repository.
6. Use these settings:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `/` (repository root)
7. Select **Save and Deploy**.
8. Cloudflare will provide a `*.pages.dev` address.

Cloudflare documentation: https://developers.cloudflare.com/pages/get-started/git-integration/

## 4. YouTube details
Channel URL:
https://www.youtube.com/channel/UCfQs1XyjNaPsnr4hdW_QA2g

Subscribe URL:
https://www.youtube.com/channel/UCfQs1XyjNaPsnr4hdW_QA2g?sub_confirmation=1

The embedded uploads playlist uses the channel's uploads playlist ID. If the embed does not display, the direct channel video link remains available on the page.

## Notes
- The site does not host downloadable files; files remain on MediaFire.
- Sample MediaFire links are placeholders and must be replaced before public launch.
- The website is English-first. Text can be translated by editing `index.html`.
- No analytics or cookies are installed by this starter project.
