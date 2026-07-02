import type { ComponentType } from "react"; 

export interface WidgetDefinition { 
  id: string; 
  title: string; 
  subtitle: string; 
  icon: string; 
  component: ComponentType; 
  order?: number; 
}
