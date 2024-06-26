export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      generations: {
        Row: {
          // calories: number | null
          // carbs: number | null
          // content_json: Json | null
          // cooking_time: string | null
          created_at: string
          description: string | null
          difficulty: string | null
          // fats: number | null
          id: string
          // low_calories: string | null
          // paleo: string | null
          // people: string | null
          // proteins: number | null
          title: string | null
          // vegan: string | null
        }
        Insert: {
          // calories?: number | null
          // carbs?: number | null
          content_json?: Json | null
          // cooking_time?: string | null
          created_at?: string
          description?: string | null
          difficulty?: string | null
          // fats?: number | null
          id?: string
          // low_calories?: string | null
          // paleo?: string | null
          // people?: string | null
          // proteins?: number | null
          title?: string | null
          // vegan?: string | null
        }
        Update: {
          // calories?: number | null
          // carbs?: number | null
          content_json?: Json | null
          // cooking_time?: string | null
          created_at?: string
          description?: string | null
          difficulty?: string | null
          // fats?: number | null
          id?: string
          // low_calories?: string | null
          // paleo?: string | null
          // people?: string | null
          // proteins?: number | null
          title?: string | null
          // vegan?: string | null
        }
        Relationships: []
      }
      recipes: {
        Row: {
          // calories: number | null
          // carbs: number | null
          // content: string | null
          // content_json: Json | null
          // cooking_time: string | null
          created_at: string | null
          description: string | null
          difficulty: string | null
          // fats: number | null
          id: string
          ingredients: string | null
          // low_calories: string | null
          // paleo: string | null
          // people: string | null
          // proteins: number | null
          title: string | null
          user_id: string | null
          // vegan: string | null
        }
        Insert: {
          // calories?: number | null
          // carbs?: number | null
          content?: string | null
          content_json?: Json | null
          // cooking_time?: string | null
          created_at?: string | null
          description?: string | null
          difficulty?: string | null
          // fats?: number | null
          id?: string
          ingredients?: string | null
          // low_calories?: string | null
          // paleo?: string | null
          // people?: string | null
          // proteins?: number | null
          title?: string | null
          user_id?: string | null
          // vegan?: string | null
        }
        Update: {
          // calories?: number | null
          // carbs?: number | null
          content?: string | null
          content_json?: Json | null
          // cooking_time?: string | null
          created_at?: string | null
          description?: string | null
          difficulty?: string | null
          // fats?: number | null
          id?: string
          ingredients?: string | null
          // low_calories?: string | null
          // paleo?: string | null
          // people?: string | null
          // proteins?: number | null
          title?: string | null
          user_id?: string | null
          // vegan?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
