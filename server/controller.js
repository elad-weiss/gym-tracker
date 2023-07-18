const pool = require('./db');
const queries = require('./queries');

const test = (req, res) => {
    pool.query(queries.getExercisesNames, (error, result) => {
        if (error) throw error;
        res.send(result.rows);
    })
}

const lastNSessions = (req, res) => {
    const { id, n } = req.params;
    let response = [];
    let row;
    pool.query(queries.getLastNSessions, [id, n], (error, result) => {
        if (error) throw error;
        if (result.rowCount < 1) {
            res.send({});
            return;
        }
        for (let i = 0; i < n; i++) {
            row = result.rows[i];
            date = formatDate(row.date);
            response.push({
                id: row.id,
                title: date,
                exNum: row.exercises_names.length,
                ex1Name: row.exercises_names[0], ex1Sets: row.sets_reps[0][0], ex1Reps: row.sets_reps[0][1],
                ex2Name: row.exercises_names[1], ex2Sets: row.sets_reps[1][0], ex2Reps: row.sets_reps[1][1],
                ex3Name: row.exercises_names[2], ex3Sets: row.sets_reps[2][0], ex3Reps: row.sets_reps[2][1],
            });
        } 
        res.send({response});
    })
}

module.exports = {
    test,
    lastNSessions,
}

const formatDate = (date) => {
    formattedDate = new Date(date);
    return formattedDate.getDate()+'/'+(formattedDate.getMonth()+1)+'/'+formattedDate.getFullYear();
}