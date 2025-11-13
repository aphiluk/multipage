import Value from "./Value"

const Counter = () => {
  return (
    <div className="rounded-4 p-3 m-3 text-center">
      <Value name="Counter" type="int" init={0} />
    </div>
  )
}

export default Counter
