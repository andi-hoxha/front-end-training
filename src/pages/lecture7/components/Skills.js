import React,{Component} from "react";
import {Checkbox, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@material-ui/core";


class Skills extends Component{

    render() {
        const {state = {},name,changed,skillType = [],skillTypeName} = this.props
        const skills = state[name] || []
        return (
            <Grid item xs={3}>
                <InputLabel htmlFor="outlined-age-simple">{skillTypeName}</InputLabel>
                <Select
                    fullWidth
                    id="demo-multiple-checkbox"
                    multiple
                    value={state[name] || []}
                    name={name}
                    onChange={changed}
                    input={<OutlinedInput labelWidth={100} name={skillTypeName}/>}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {skillType.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={skills.indexOf(name) > -1}/>
                            <ListItemText primary={name}/>
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
        )
    }
}

export default Skills