# Promptspace — AI Prompts Hub

A Next.js 15 platform with an AI prompt library, tools directory, editorial blog, admin CMS, affiliate recommendations and member accounts.

## Stack
- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS
- MongoDB Atlas with Mongoose
- Admin and member sessions: bcrypt password hashing + signed HTTP-only JWT cookies
- Optional article image uploads through Cloudinary signed uploads

## Local development
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in the values.
4. Run `npm run dev` and open `http://localhost:3000`.

## Required environment variables
- `NEXT_PUBLIC_SITE_URL`: canonical site URL.
- `MONGODB_URI`: MongoDB Atlas connection string for a dedicated database user.
- `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, `ADMIN_JWT_SECRET`: admin credentials and session secret. Generate a bcrypt hash with `node -e "const b=require('bcryptjs'); console.log(b.hashSync('YOUR_LONG_PASSWORD',12))"`; generate a secret with `openssl rand -base64 48`.
- `USER_JWT_SECRET`: a separate random secret of at least 32 characters for member sessions. Generate with `openssl rand -base64 48`.

## Optional article image uploads
Configure `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET` in local and Vercel environments. Upload signatures are server-generated and only available to authenticated admins.

## Admin CMS
Visit `/admin/login`. Manage prompts, blog articles and affiliate recommendations. The first public prompt/blog API request seeds starter examples into MongoDB if the relevant collection is empty.

## Member accounts (V5)
- Register: `/register`; sign in: `/login`; member dashboard: `/dashboard`.
- Members can save and remove published prompts from the prompt library.
- Passwords are hashed with bcrypt; sessions are signed, HTTP-only cookies.
- Bookmarks are stored per user in MongoDB and are not exposed publicly.
- Email verification, password reset, social login, paid tiers and account deletion are not included yet.

## Affiliate recommendations
- Public directory: `/affiliates`; admin manager: `/admin/affiliates`.
- Publish curated recommendations with an affiliate disclosure. Affiliate click attribution and conversion tracking are not included yet.

## Deploy to Vercel
1. Import this GitHub repository into Vercel and select Next.js.
2. Add all required environment variables (plus Cloudinary values if using uploads).
3. Configure MongoDB Atlas network access for the deployment.
4. Deploy and test admin login, member registration/login, saved prompts and public pages.

## Production checklist
- Use dedicated MongoDB users with least-privilege database access.
- Keep admin and member JWT secrets separate, long and private.
- Add rate limiting / abuse protection to login, registration and write endpoints before public launch.
- Add email verification and password reset before treating accounts as production identity accounts.
- Review privacy, terms, cookie consent, affiliate disclosures and advertising policies before monetization.
- Payment processing, paid memberships, digital delivery, AdSense integration and affiliate conversion tracking require further implementation and relevant provider accounts.
