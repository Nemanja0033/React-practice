
const LearningPlan = () => {

    const hooks = ['useState', 'useEffect', 'useContext', 'useReducer']

  return (
    <div>
        <h1>React Hooks</h1>
        {hooks.map((hook) => (
            <h3  id="hook">{hook}</h3>
        ))}
    </div>
  )
}

export default LearningPlan