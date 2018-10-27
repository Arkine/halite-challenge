const logging = require('./hlt/logging');

exports.gridDensityMap = (searchW, searchH, grid) => {
    /**
     * Grid object
     * [{
     *     density: int,
     *     center: {x: int, y: int}
     * }]
     */
    const grids = [];
    
    // create start and end points
    // const gridScan = {
    //     x: 0,
    //     y: 0,
    // };

    const iterationsX = Math.ceil(grid.width / searchW);
    const iterationsY = Math.ceil(grid.height / searchH);

    // start grid
    for (let startX = 0; startX < iterationsX; startX++) {
        const gridBlock = {
            density: 0,
            center: {
                x: 0,
                y: 0,
            }
        };

        // for each x row
        for (let i=0; i < grid._cells.length; i++) {
            const row = grid._cells[i];
            const start = startX * searchW;
            const end = (start + searchW > row.length) ? row.length : start + searchW;

            const chunk = row.slice(start, end);
            
            // for each cell in the chunk
            for (let j = 0; j < chunk.length; j++) {
                const cell = chunk[j];
                // logging.info('ROW item', JSON.stringify(cell));
                gridBlock += cell.haliteAmount;
            }
        }

        grids.push(gridBlock);
    }

   

    logging.info('ROW item', gridDensityTotal);

    return grids;
    
}

exports.calculateCenter = (h, w) => {

}