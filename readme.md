# AutoThumb

A simple web application to generate YouTube thumbnails.

## Description

AutoThumb helps you create custom thumbnails for your YouTube videos. Upload images, add text, apply filters, and download your thumbnails ready for YouTube.

## Tech Stack

- **Next.js** - React framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **NextAuth** - Authentication
- **Prisma** - Database ORM
- **Stripe** - Payments
- **AWS S3** - Image storage

## Installation

1. Clone the repository
```bash
git clone https://github.com/Bhup-GitHUB/autothumb.git
cd autothumb
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file:
```env
DATABASE_URL="your-database-url"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="your-stripe-key"
AWS_ACCESS_KEY_ID="your-aws-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
```

4. Set up database
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- Create custom thumbnails
- Add text and effects
- Save and download thumbnails
- User authentication
- Cloud storage

## License

MIT