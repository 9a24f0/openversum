export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact: {
        Row: {
          country: string | null
          created_at: string | null
          cv: string | null
          email: string
          id: number
          message: string
          name: string
          organization: string | null
          phone_number: string | null
          type: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string | null
          cv?: string | null
          email: string
          id?: number
          message: string
          name: string
          organization?: string | null
          phone_number?: string | null
          type?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string | null
          cv?: string | null
          email?: string
          id?: number
          message?: string
          name?: string
          organization?: string | null
          phone_number?: string | null
          type?: string | null
        }
      }
      customer: {
        Row: {
          added_by: string | null
          city: string | null
          created_at: string | null
          gender: string | null
          household_role: string[] | null
          household_size: number | null
          id: string
          latitude: number | null
          longitude: number | null
          name: string | null
          phone: string | null
          type: string | null
        }
        Insert: {
          added_by?: string | null
          city?: string | null
          created_at?: string | null
          gender?: string | null
          household_role?: string[] | null
          household_size?: number | null
          id: string
          latitude?: number | null
          longitude?: number | null
          name?: string | null
          phone?: string | null
          type?: string | null
        }
        Update: {
          added_by?: string | null
          city?: string | null
          created_at?: string | null
          gender?: string | null
          household_role?: string[] | null
          household_size?: number | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name?: string | null
          phone?: string | null
          type?: string | null
        }
      }
      entrep_questions: {
        Row: {
          added_by: string | null
          created_at: string | null
          id: string
          q1: string | null
          q2: string | null
          q3: string | null
          q4: string | null
          q5: string | null
          q6: string | null
          q7: string | null
        }
        Insert: {
          added_by?: string | null
          created_at?: string | null
          id: string
          q1?: string | null
          q2?: string | null
          q3?: string | null
          q4?: string | null
          q5?: string | null
          q6?: string | null
          q7?: string | null
        }
        Update: {
          added_by?: string | null
          created_at?: string | null
          id?: string
          q1?: string | null
          q2?: string | null
          q3?: string | null
          q4?: string | null
          q5?: string | null
          q6?: string | null
          q7?: string | null
        }
      }
      filter_ids: {
        Row: {
          id: string
        }
        Insert: {
          id: string
        }
        Update: {
          id?: string
        }
      }
      filter_sales: {
        Row: {
          created_at: string | null
          currency: string
          customer_id: string | null
          filter_id_array: string[] | null
          id: string
          latitude: number | null
          longitude: number | null
          number_sold: number
          price: number
          sold_by: string | null
        }
        Insert: {
          created_at?: string | null
          currency: string
          customer_id?: string | null
          filter_id_array?: string[] | null
          id: string
          latitude?: number | null
          longitude?: number | null
          number_sold: number
          price: number
          sold_by?: string | null
        }
        Update: {
          created_at?: string | null
          currency?: string
          customer_id?: string | null
          filter_id_array?: string[] | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          number_sold?: number
          price?: number
          sold_by?: string | null
        }
      }
      news: {
        Row: {
          created_at: string | null
          id: number
          image: string | null
          text: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          image?: string | null
          text?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          id?: number
          image?: string | null
          text?: string | null
          title?: string
        }
      }
      profiles: {
        Row: {
          age_year: number | null
          country: string | null
          first_name: string | null
          gender: string | null
          id: string
          is_complete: boolean
          last_name: string | null
          phone: string | null
          profile_picture: string | null
        }
        Insert: {
          age_year?: number | null
          country?: string | null
          first_name?: string | null
          gender?: string | null
          id: string
          is_complete?: boolean
          last_name?: string | null
          phone?: string | null
          profile_picture?: string | null
        }
        Update: {
          age_year?: number | null
          country?: string | null
          first_name?: string | null
          gender?: string | null
          id?: string
          is_complete?: boolean
          last_name?: string | null
          phone?: string | null
          profile_picture?: string | null
        }
      }
      user_whitelist: {
        Row: {
          created_at: string | null
          email: string
          id: number
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
        }
      }
      water_questions: {
        Row: {
          added_by: string | null
          created_at: string | null
          id: string
          latitude: number | null
          longitude: number | null
          q10: string | null
          q11: string | null
          q12: string | null
          q1a: string[] | null
          q1b: string[] | null
          q2: string | null
          q2ifno: string[] | null
          q3: string | null
          q4: string | null
          q5: string | null
          q5boiling: string | null
          q5yes: string | null
          q6: string | null
          q6yes: string | null
          q7: string | null
          q8: string | null
          q9: string | null
        }
        Insert: {
          added_by?: string | null
          created_at?: string | null
          id: string
          latitude?: number | null
          longitude?: number | null
          q10?: string | null
          q11?: string | null
          q12?: string | null
          q1a?: string[] | null
          q1b?: string[] | null
          q2?: string | null
          q2ifno?: string[] | null
          q3?: string | null
          q4?: string | null
          q5?: string | null
          q5boiling?: string | null
          q5yes?: string | null
          q6?: string | null
          q6yes?: string | null
          q7?: string | null
          q8?: string | null
          q9?: string | null
        }
        Update: {
          added_by?: string | null
          created_at?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          q10?: string | null
          q11?: string | null
          q12?: string | null
          q1a?: string[] | null
          q1b?: string[] | null
          q2?: string | null
          q2ifno?: string[] | null
          q3?: string | null
          q4?: string | null
          q5?: string | null
          q5boiling?: string | null
          q5yes?: string | null
          q6?: string | null
          q6yes?: string | null
          q7?: string | null
          q8?: string | null
          q9?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
