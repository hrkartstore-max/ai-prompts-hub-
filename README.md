# Promptspace — AI Prompts Hub

A Next.js 15 platform with a prompt library, AI tools directory, editorial blog and password-protected admin CMS.

## Stack
- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS
- MongoDB Atlas with Mongoose
- Admin session: bcrypt password verification + signed HTTP-only JWT cookie
- Optional article image uploads through Cloudinary signed uploads

## Local development

1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in the values below.
4. Run `npm run dev` and open `http://localhost:3000`.

## Required environment variables

- `NEXT_PUBLIC_SITE_URL`: canonical site URL.
- `MONGODB_URI`: MongoDB Atlas connection string for a dedicated database user with access only to the Promptspace database.
- `ADMIN_EMAIL`: the admin sign-in email.
- `ADMIN_PASSWORD_HASH`: bcrypt hash of the admin password. Generate locally with: `node -e "const b=require('bcryptjs'); console.log(b.hashSync('REPLACE_WITH_A_LONG_UNIQUE_PASSWORD',12))"` and paste the output into your hosting environment. Never commit the real password or hash to Git.
- `ADMIN_JWT_SECRET`: random secret of at least 32 characters. Generate with `openssl rand -base64 48`.

## Optional article image uploads

Create a Cloudinary account and configure `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET` in your local environment and Vercel project settings. Upload signatures are generated on the server and only available to authenticated admins. Uploaded images are limited to 5 MB by the CMS interface.

## Admin

Visit `/admin/login`. The first public prompt/blog API request seeds the starter examples into MongoDB if the relevant collection is empty. Admin-created prompts and articles can be saved as drafts or published. Public pages only expose published database content.

## Deploy to Vercel

1. Import this GitHub repository into Vercel.
2. Set the framework preset to Next.js.
3. Add all required environment variables (and Cloudinary variables if using uploads) in Project Settings → Environment Variables.
4. Ensure the MongoDB Atlas database user and network access configuration permit the Vercel deployment to connect.
5. Deploy, then test `/admin/login`, create a draft prompt, publish an article and verify both public pages.

## Production checklist

- Use a dedicated MongoDB user with a strong unique password and least-privilege database access.
- Use a long random JWT secret and rotate it if exposed.
- Configure an appropriate Atlas network access policy for your deployment.
- Add rate limiting / abuse protection to the admin login endpoint before opening the CMS to the public internet.
- Review privacy, terms, cookie consent, affiliate disclosures and advertising policies before monetization.
- Replace starter article copy with original, fact-checked editorial content.

This repository does not include user registration, payments, an affiliate tracking engine or an AdSense account integration yet.
