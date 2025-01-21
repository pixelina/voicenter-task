import { defineStore } from "pinia";
import axios from "axios";
import type { TestTaskTemplate } from "@/types/interfaces"; 
import { baseUrl } from "@/utils/apiConfig";

interface StoreState {
    pageContent: TestTaskTemplate | null; 
}

export const useContentStore = defineStore('contentStore', {
    state: (): StoreState => ({
        pageContent: null, 
    }),
    actions: {
        async getContent(): Promise<TestTaskTemplate | null> {
            try {
                let response = await axios.get(`${baseUrl}/api/site-data`);

                this.pageContent = response.data.data.siteData.testTaskTemplate_30_15673 as TestTaskTemplate;

                if (this.pageContent?.testTaskSecondDescriptiveBlockItems) {
                    this.pageContent.testTaskSecondDescriptiveBlockItems = JSON.parse(response.data.data.siteData.testTaskTemplate_30_15673.testTaskSecondDescriptiveBlockItems).slice(0, 3);
                }

                if (this.pageContent?.testTaskSlidesBlockSlides) {
                    this.pageContent.testTaskSlidesBlockSlides = JSON.parse(response.data.data.siteData.testTaskTemplate_30_15673.testTaskSlidesBlockSlides);
                }
                
                return this.pageContent;
            } catch (error) {
                console.error("Error fetching content", error);
                return null;
            }
        }
    },
});