export interface GameItem {
  name: string
  description: string
  category?: 'restorative' | 'enhancement' | 'support'
  numberHeld?: number
}
