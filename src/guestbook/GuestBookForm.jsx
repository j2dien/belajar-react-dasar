export default function GuestBook({ ref, name, setName }) {
  return (
    <>
      <label htmlFor="name">Name</label>
      <br />
      <input
        ref={ref}
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
    </>
  );
}
