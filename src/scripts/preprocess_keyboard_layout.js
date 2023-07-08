// script to preprocess layout data from easy to create state to state usable by react

const process = require('process')
const fs = require('fs')

filename = process.argv[2]
output_filename = process.argv[3]

file = fs.readFileSync(filename)
keyboard_layout = JSON.parse(file)

var rows = keyboard_layout.ISO["alpha_numerics"]
rows = rows.map( (row, index)=>
keyboard_layout.ISO["special_keys_first"][index]
.concat(row.split(""))
.concat( keyboard_layout.ISO["special_keys_last"][index])
)

rows = rows.concat([ keyboard_layout.ISO["last_row"]])

var rows_alt =  keyboard_layout.ISO["alpha_numerics_alt"]
rows_alt = rows_alt.map( (row, index)=>
keyboard_layout.ISO["special_keys_first"][index]
.concat(row.split(""))
.concat( keyboard_layout.ISO["special_keys_last"][index])
)

rows_alt = rows_alt.concat([ keyboard_layout.ISO["last_row"]])

output = {
    rows: rows,
    rows_alt: rows_alt
}

fs.writeFileSync(output_filename, JSON.stringify(output))