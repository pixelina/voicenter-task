export interface TestTaskTemplate {
  ContentType?: string;
  ID?: number;
  children?: Record<string, any>;
  createDate?: string;
  jpath?: string;
  publishDate?: string;
  sort?: number;
  testTaskHeaderImage: string;
  testTaskHeaderImageAltText: string;
  testTaskHeaderSubtitle: string;
  testTaskHeaderText: string;
  testTaskHeaderTitle: string;
  testTaskSecondBlockSideNavigationTitle: string;
  testTaskSecondBlockTitle: string;
  testTaskSecondDescriptiveBlockItems: TestTaskItem[];
  testTaskSlidesBlockSlides: Slide[];
  testTaskSlidesBlockSubtitle: string;
  testTaskSlidesBlockTitle: string;
  url?: string;
}

export interface Slide {
    buttonLink: string; 
    buttonText: string; 
    description: string; 
    image: string; 
    imageAlt: string; 
    key: string; 
    name: string; 
    ncContentTypeAlias: string; 
    subtitle: string; 
    title: string; 
  }

export interface TestTaskItem {
    buttonLink: string;
    buttonText: string;
    image: string;
    imageAltAtr: string;
    key: string;
    name: string;
    ncContentTypeAlias: string;
    subtitle: string;
    text: string;
    title: string;
}