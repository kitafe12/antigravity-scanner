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
            master_traders: {
                Row: {
                    id: string
                    exchange_name: string
                    exchange_uid: string
                    nickname: string | null
                    avatar_url: string | null
                    roi_90d: number | null
                    max_drawdown: number | null
                    win_rate: number | null
                    aum: number | null
                    trading_type: string | null
                    profile_url: string | null
                    last_updated: string | null
                }
                Insert: {
                    id?: string
                    exchange_name?: string
                    exchange_uid: string
                    nickname?: string | null
                    avatar_url?: string | null
                    roi_90d?: number | null
                    max_drawdown?: number | null
                    win_rate?: number | null
                    aum?: number | null
                    trading_type?: string | null
                    profile_url?: string | null
                    last_updated?: string | null
                }
                Update: {
                    id?: string
                    exchange_name?: string
                    exchange_uid?: string
                    nickname?: string | null
                    avatar_url?: string | null
                    roi_90d?: number | null
                    max_drawdown?: number | null
                    win_rate?: number | null
                    aum?: number | null
                    trading_type?: string | null
                    profile_url?: string | null
                    last_updated?: string | null
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
