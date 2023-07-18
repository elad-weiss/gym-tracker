const getExercisesNames = "SELECT exercises_names FROM past_sessions";
const getLastNSessions = "SELECT * FROM past_sessions WHERE userid=$1 ORDER BY DATE DESC LIMIT $2";

module.exports = {
    getExercisesNames,
    getLastNSessions,
}