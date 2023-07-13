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
      affiliates: {
        Row: {
          createdAt: string | null
          discount: number | null
          id: string
          link: string
          price: number
          thumbnail: string
          title: string
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string | null
          discount?: number | null
          id?: string
          link: string
          price: number
          thumbnail: string
          title: string
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string | null
          discount?: number | null
          id?: string
          link?: string
          price?: number
          thumbnail?: string
          title?: string
          updatedAt?: string | null
        }
        Relationships: []
      }
      author: {
        Row: {
          avatar: Json | null
          biodata: string | null
          createdAt: string | null
          email: string | null
          id: string
          name: string | null
          updatedAt: string | null
          username: string
          website: string | null
        }
        Insert: {
          avatar?: Json | null
          biodata?: string | null
          createdAt?: string | null
          email?: string | null
          id: string
          name?: string | null
          updatedAt?: string | null
          username: string
          website?: string | null
        }
        Update: {
          avatar?: Json | null
          biodata?: string | null
          createdAt?: string | null
          email?: string | null
          id?: string
          name?: string | null
          updatedAt?: string | null
          username?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "author_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      blogs: {
        Row: {
          author: string
          cat: string[]
          categories: Json[]
          content: string
          cover: Json | null
          createdAt: string
          description: string
          draft: boolean
          excerpt: string | null
          featured: boolean
          id: string
          publishedAt: string | null
          readTime: Json
          slug: string
          title: string
          updatedAt: string | null
        }
        Insert: {
          author?: string
          cat?: string[]
          categories: Json[]
          content: string
          cover?: Json | null
          createdAt?: string
          description: string
          draft?: boolean
          excerpt?: string | null
          featured?: boolean
          id?: string
          publishedAt?: string | null
          readTime?: Json
          slug: string
          title: string
          updatedAt?: string | null
        }
        Update: {
          author?: string
          cat?: string[]
          categories?: Json[]
          content?: string
          cover?: Json | null
          createdAt?: string
          description?: string
          draft?: boolean
          excerpt?: string | null
          featured?: boolean
          id?: string
          publishedAt?: string | null
          readTime?: Json
          slug?: string
          title?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blogs_author_fkey"
            columns: ["author"]
            referencedRelation: "author"
            referencedColumns: ["id"]
          }
        ]
      }
      blogs_test: {
        Row: {
          author: string
          cat: string[]
          categories: Json[]
          content: string
          cover: Json | null
          createdAt: string
          description: string
          draft: boolean
          excerpt: string | null
          featured: boolean
          id: string
          publishedAt: string | null
          readTime: Json
          slug: string
          title: string
          updatedAt: string | null
        }
        Insert: {
          author?: string
          cat?: string[]
          categories: Json[]
          content: string
          cover?: Json | null
          createdAt?: string
          description: string
          draft?: boolean
          excerpt?: string | null
          featured?: boolean
          id?: string
          publishedAt?: string | null
          readTime?: Json
          slug: string
          title: string
          updatedAt?: string | null
        }
        Update: {
          author?: string
          cat?: string[]
          categories?: Json[]
          content?: string
          cover?: Json | null
          createdAt?: string
          description?: string
          draft?: boolean
          excerpt?: string | null
          featured?: boolean
          id?: string
          publishedAt?: string | null
          readTime?: Json
          slug?: string
          title?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blogs_test_author_fkey"
            columns: ["author"]
            referencedRelation: "author"
            referencedColumns: ["id"]
          }
        ]
      }
      categories: {
        Row: {
          created_at: string | null
          id: number
          name: string
          slug: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          slug: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          slug?: string
        }
        Relationships: []
      }
      newsletter: {
        Row: {
          createdAt: string | null
          email: string
          id: string
          name: string | null
          subscribe: boolean
        }
        Insert: {
          createdAt?: string | null
          email: string
          id?: string
          name?: string | null
          subscribe?: boolean
        }
        Update: {
          createdAt?: string | null
          email?: string
          id?: string
          name?: string | null
          subscribe?: boolean
        }
        Relationships: []
      }
      posts: {
        Row: {
          author: string
          cat: string[]
          categories: Json[] | null
          content: string
          cover: Json | null
          createdAt: string
          description: string | null
          draft: boolean
          excerpt: string | null
          featured: boolean
          id: string
          publishedAt: string | null
          readTime: Json | null
          slug: string
          thumbnail: string | null
          thumbnailInfo: string | null
          title: string
          updatedAt: string | null
        }
        Insert: {
          author: string
          cat?: string[]
          categories?: Json[] | null
          content: string
          cover?: Json | null
          createdAt?: string
          description?: string | null
          draft?: boolean
          excerpt?: string | null
          featured?: boolean
          id?: string
          publishedAt?: string | null
          readTime?: Json | null
          slug: string
          thumbnail?: string | null
          thumbnailInfo?: string | null
          title: string
          updatedAt?: string | null
        }
        Update: {
          author?: string
          cat?: string[]
          categories?: Json[] | null
          content?: string
          cover?: Json | null
          createdAt?: string
          description?: string | null
          draft?: boolean
          excerpt?: string | null
          featured?: boolean
          id?: string
          publishedAt?: string | null
          readTime?: Json | null
          slug?: string
          thumbnail?: string | null
          thumbnailInfo?: string | null
          title?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_author_fkey"
            columns: ["author"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          biodata: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          biodata?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          biodata?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
