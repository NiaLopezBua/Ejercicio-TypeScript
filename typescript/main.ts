import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Telefono } from "./telefono";
import { Mail } from "./mail";

const ResidenciaAna = new Direccion(
    'Avda. del Mediterráneo',
      7,
     '1',
     'A', 
      28007,
     'Retiro', 
     'Madrid'
 )

 const TelefonoAna = new Telefono(
    'Móvil',
    600427450
 )

const MailAna = new Mail(
    'Personal',
    'garsaAna@gmail.com'
)

const DatosAna  = new Persona(
    'Ana',
    'García Sánchez',
    35,
    '30307519M',
   new Date(1998, 1, 6),
   'Rosa',
   'Mujer',
   [ResidenciaAna],
   [MailAna],
   [TelefonoAna],
   'Abogada, llamar a partir de las 10:00am'
);

const ResidenciaJuan = new Direccion(
    'Calle Paraguay',
    9,
    '2',
    'D',
    36630,
    'Cangas',
    'Pontevedra'
)

const TelefonoJuan = new Telefono(
    'Fijo',
    986875678
)


const MailJuan = new Mail(
    'Personal',
    'juanAlonso@hotmail.com'
)

const DatosJuan = new Persona(
    'Juan',
    'Alonso González',
    55,
    '26308521V',
    new Date(1968, 5, 24),
    'Azul',
    'Hombre',
    [ResidenciaJuan],
    [MailJuan],
    [TelefonoJuan],
    'Jefe taller BMW'
    );

    const ResidenciaSofía = new Direccion(
        'Calle del Carmen',
        10,
        '12',
        'E',
        30204,
        'Cartagena',
        'Murcia'
    )

    const TelefonoSofía = new Telefono(
        'Móvil',
        690141712
    )

    const MailSofía = new Mail(
        'Personal',
        'soysofia@gmail.com'
    )

    const DatosSofía = new Persona(
        'Sofía',
        'Pérez LaFuente',
        27,
        '59574412L',
        new Date(1996, 7, 25),
        'Naranja',
        'Mujer',
        [ResidenciaSofía],
        [MailSofía],
        [TelefonoSofía],
        'Panadera'
    );

    console.log('Contactos');
    console.log(DatosAna);
    console.log(DatosJuan);
    console.log(DatosSofía);

    const Agenda: Array<Persona> = new Array(DatosAna, DatosJuan, DatosSofía);

    const buscarDni: string = '59574412L';

    const buscarPersona: Persona = Agenda.find(persona => persona.dni === buscarDni) as Persona;

    const nuevaDireccion = new Direccion(
        'Avda. de la Marina',
        2,
        '1',
        'B',
        30001,
        'Torrevieja',
        'Alicante'

    )

    const nuevoMail = new Mail(
        'Trabajo',
        'pandeSofia@gmail.com'
    )

    const nuevoTelefono = new Telefono(
        'Móvil Trabajo',
        616502419
    )

    buscarPersona.añadirNuevaDireccion(nuevaDireccion);
    buscarPersona.añadirNuevoMail(nuevoMail);
    buscarPersona.añadirNuevoTelefono(nuevoTelefono);

    console.log('Contactos después de modificación');
    console.log(DatosAna);
    console.log(DatosJuan);
    console.log(DatosSofía);




