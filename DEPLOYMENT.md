# Deploying Your Portfolio on Vercel

This guide will help you deploy your portfolio website on Vercel.

## Prerequisites

1. A [Vercel](https://vercel.com) account
2. [Git](https://git-scm.com/) installed on your local machine
3. Your portfolio code pushed to a GitHub, GitLab, or Bitbucket repository

## Deployment Steps

### 1. Prepare Your Project

Your project is already configured for Vercel deployment with:
- A `vercel.json` configuration file
- An `.nvmrc` file specifying Node.js version 20

### 2. Connect Your Repository to Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." and select "Project"
3. Connect to your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your portfolio repository
5. Configure your project:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 3. Environment Variables

Add the following environment variables in the Vercel dashboard for your project:
- `DATABASE_URL`: Your PostgreSQL database URL
- Any other environment variables needed for your application

### 4. Deploy

Click "Deploy" and wait for the build to complete. Vercel will provide you with a deployment URL once it's ready.

### 5. Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to the "Domains" section
3. Add and configure your custom domain

## Continuous Deployment

Vercel automatically deploys your app whenever you push changes to your connected repository. No additional configuration is needed for continuous deployment.

## Troubleshooting

If you encounter any issues during deployment:
1. Check the build logs in the Vercel dashboard
2. Ensure all environment variables are correctly set
3. Make sure your database is properly configured and accessible

For more information, visit the [Vercel Documentation](https://vercel.com/docs).