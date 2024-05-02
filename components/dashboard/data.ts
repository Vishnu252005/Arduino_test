import {
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  
} from "lucide-react"

export const difficulties = [
  {
    value: "easy",
    label: "Easy",
    icon: BatteryLow,
  },
  {
    value: "medium",
    label: "Medium",
    icon: BatteryMedium,
  },
  {
    value: "Expert",
    label: "expert",
    icon: BatteryFull,
  },
]

// export const statuses = [
//   {
//     label: "Vegan",
//     value: "vegan",
//     icon: Vegan,
//   },
//   {
//     label: "Paleo",
//     value: "paleo",
//     icon: Beef,
//   },
// ]
