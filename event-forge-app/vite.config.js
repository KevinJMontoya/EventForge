import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import { SearchDriver } from "@elastic/search-ui";
//import { ElasticsearchAPIConnector } from "@elastic/search-ui-elasticsearch-connector";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

/*const connector = new ElasticsearchAPIConnector({
  host: "http://localhost:5173/BrowseEvents/", 
  index: "main.jsx", 
});

export const driver = new SearchDriver({
  apiConnector: connector,
  searchQuery: {
    search_fields: {
    title: {}, // Replace with fields you want to search
  },
  result_fields: {
    title: { raw: {} },
    description: { raw: {} },
  },
  } ,
});*/