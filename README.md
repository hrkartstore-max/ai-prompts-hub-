# Promptspace — AI Prompts Hub

A Next.js 15 platform with a prompt library, AI tools directory, editorial blog, protected admin CMS and affiliate recommendations directory.

## Stack
- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS
- MongoDB Atlas with Mongoose
- Admin session: bcrypt password verification + signed HTTP-only JWT cookie
- Optional article image uploads through Cloudinary signed uploads

## Local development
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in the values.
4. Run `npm run dev` and open `http://localhost:3000`.

## Required environment variables
- `NEXT_PUBLIC_SITE_URL`: canonical site URL.
- `MONGODB_URI`: MongoDB Atlas connection string for a dedicated database user.
- `ADMIN_EMAIL`: admin sign-in email.
- `ADMIN_PASSWORD_HASH`: bcrypt hash. Generate locally: `node -e "const b=require('bcryptjs'); console.log(b.hashSync('REPLACE_WITH_A_LONG_UNIQUE_PASSWORD',12))"`. Never commit credentials to Git.
- `ADMIN_JWT_SECRET`: random secret of at least 32 characters. Generate with `openssl rand -base64 48`.

## Optional article image uploads
Configure `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET` in your local environment and Vercel project settings. Upload signatures are server-generated and only available to authenticated admins.

## Admin CMS
Visit `/admin/login`. Manage prompts and blog articles from the dashboard. The first public prompt/blog API request seeds starter examples into MongoDB if the relevant collection is empty. Public pages only expose published content.

## Affiliate recommendations (V4)
- Public directory: `/affiliates`.
- Admin manager: `/admin/affiliates` (requires the admin session).
- Add product/tool name, provider, description, category, image URL and HTTPS affiliate URL.
- Save as draft or publish; feature selected recommendations.
- The public directory includes an affiliate disclosure. Links use sponsored/nofollow attributes.
- No click attribution, conversion tracking or affiliate network API sync is included yet.

## Deploy to Vercel
1. Import this GitHub repository into Vercel.
2. Select the Next.js framework preset.
3. Add required environment variables (plus Cloudinary values if using uploads).
4. Configure MongoDB Atlas network access for your deployment.
5. Deploy and test admin login, prompt/article publishing and the affiliate directory.

## Production checklist
- Use a dedicated MongoDB user with least-privilege database access.
- Use a long random JWT secret and rotate it if exposed.
- Add rate limiting / abuse protection to admin login and write endpoints.
- Review privacy, terms, cookie consent, affiliate disclosures and advertising policies before monetization.
- Replace starter article copy with original, fact-checked editorial content.
- Payment processing, paid memberships, digital delivery, AdSense approval/integration and affiliate conversion tracking require additional implementation and relevant provider accounts.
