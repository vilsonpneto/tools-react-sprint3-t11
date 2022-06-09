//  Componente de input sem uso de Biblioteca
export const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <>
      <label>{label}:</label>
      <input {...rest} {...register(name)} />
      {error && <span className="error">{error.message}</span>}
    </>
  );
};
