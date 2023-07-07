import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					email: '',
				}}
				validate={(values) => {
					let errores = {};

					// Validación de nombre
					if (!values.nombre) {
						errores.nombre = 'Por favor ingresa tu nombre';
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios';
					}

					// Validación de email
					if (!values.email) {
						errores.email = 'Por favor ingresa tu email';
					} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
						errores.email = 'Formato de email incorrecto';
					}

					return errores;
				}}

				onSubmit={({resetForm}) => {
					resetForm();
					console.log('enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}

				// Formik recibe como props una función que recibe los valores del formulario
				// y retorna un objeto con los errores de cada campo
			> 
				{( {errors}) => (
				<Form className='formulario'>
					<div>
						<label htmlFor='nombre'>Nombre</label>
						<Field 
							type='text' 
							name='nombre' 
							id='nombre' 
							placeholder='John Doe' 
						/>
						<ErrorMessage name='nombre' component={() => (<div className='errors'>{errors.nombre}</div>)} />
					</div>
					
					
					<div>
						<label htmlFor='mail'>Correo</label>
						<Field 
							type='email' 
							name='email' 
							id='email' 
							placeholder='email@email.com' 
						/>
						<ErrorMessage name='email' component={() => (<div className='errors'>{errors.email}</div>)} />
					</div>
					<div>
						<Field name='pais' as='select'>
							<option value='argentina'>Argentina</option>
							<option value='brasil'>Brasil</option>
							<option value='uruguay'>Uruguay</option>	
						</Field>
					</div>
					<div>
						<label>
							<Field type='radio' name='genero' value='masculino' /> Masculino
						</label>
						<label>
							<Field type='radio' name='genero' value='femenino' /> Femenino
						</label>
					</div>
					<div>
						<Field name='mensaje' as='textarea' placeholder='Escribe tu mensaje' rows='5' cols='50'></Field>
					</div>
					
					<button type='submit'>Enviar</button>
					{formularioEnviado && <p className='exito'>¡Formulario enviado!</p>}
				</Form>
				)}
			</Formik>
			
		</>
	);
}
 
export default Formulario;