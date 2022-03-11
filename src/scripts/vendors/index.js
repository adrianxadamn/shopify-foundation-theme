import lozad from 'lozad'
import { tns } from 'tiny-slider/src/tiny-slider'
import pikaday from 'pikaday'

export default async({ app }) => {
  window.Scoutside.vendors = window.Scoutside.vendors || {}
  window.Scoutside.vendors.lozad = lozad
  window.Scoutside.vendors.tns = tns
  window.Scoutside.vendors.pikaday = pikaday
}