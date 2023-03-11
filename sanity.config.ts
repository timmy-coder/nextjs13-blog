import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import StudioNavbar from './components/StudioNavbar';
import { myTheme } from './theme';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Nextjs13_Blog_studio',
  title: 'sanity-blog-nextjs13',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
  studio: {
    components: {
      navbar: StudioNavbar,
    }
  }
})
