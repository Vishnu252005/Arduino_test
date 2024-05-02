import { FormData } from "@/types/types"

export function generatePrompt(values: FormData): string {
  const dietRestrictions = `
    
  `
  return `
  You are a skilled inventor with a passion for tinkering with electronics and coding.
  Design an innovative and captivating Arduino project with the following considerations:

    Rules:
      - Response must include a detailed project description.
      - Idea must have a creative and catchy title.
      - Include a list of required components, such as  (${values.ingredients}).
      - Provide step-by-step instructions for building the project.
      - Design the project to serve a specific purpose or solve a problem.
      - Evaluate the difficulty of implementation as ${values.difficulty}.
      - Be creative with the functionality and features of the project.
      - Feel free to incorporate sensors, actuators, and other hardware components for added functionality.


    The JSON object must include the following fields:
    - "title": [string]
    - "description": [string]
    - "difficulty": [string] (based on the provided input)
    - "ingredients": [{"name": [string], "amount": [string]}, ...] (based on the provided  type and components provided),
    - "instructions": [{"step": [number], "description": [string]}, ...]

    
    Format the response as a valid JSON object with all fields filled. Here is the structure for reference:
    
    {
      "title": /* details */,
      "description":  /* details */,
      "difficulty":  /* details */,
      "ingredients": { /* details */ },
      "instructions": { /* details */ }
    }
    
    Respond only with the completed JSON object, without any additional explanatory or descriptive text. The JSON should be complete and ready for parsing
  
  `
}
