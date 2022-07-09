import React from 'react'
import { FILTER_CATEGORIES } from '../../../../utils/constants';
import FilterCategory from './FilterCategory'
import { List, ListSubheader } from '@mui/material'

const FilterByList = (props) => {
    const { filterBy, setFilterBy } = props;

    const categories = FILTER_CATEGORIES;

    return (
        <List
            sx={{ bgcolor: 'background.paper', width: 300 }}

            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ alignSelf: 'flex-start' }}>
                    Filter By
                </ListSubheader>
            }
        >
            {categories.map((category) => (
                <FilterCategory
                    key={category.id}
                    category={category}
                    filterBy={filterBy}
                    setFilterBy={setFilterBy} />
            ))}
        </List>
    )
}

export default FilterByList