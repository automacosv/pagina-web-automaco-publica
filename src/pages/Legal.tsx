export const Legal = () => {
    // Fecha actual aplicada dinámicamente 
    const lastUpdate = "21 de febrero de 2026";

    return (
        <div className="min-h-screen bg-bg-alt py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-gray-100">

                {/* =========================================
                    POLÍTICA DE PRIVACIDAD
                ========================================= */}
                <section className="mb-16">
                    <h1 className="text-4xl font-bold text-dark mb-4">Política de Privacidad</h1>
                    <p className="text-sm text-gray-500 mb-8 font-medium">Última actualización: {lastUpdate}</p>

                    <div className="space-y-8 text-gray-600 leading-relaxed">

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">1. Introducción</h3>
                            <p>Bienvenido a AutomaCo. Respetamos su privacidad y estamos comprometidos a proteger su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos la información cuando usted utiliza nuestro sistema de gestión y descarga de Documentos Tributarios Electrónicos (DTEs).</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">2. Información que recopilamos</h3>
                            <p className="mb-3">Para proporcionar nuestros servicios, podemos recopilar y procesar los siguientes tipos de información:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-dark">Información de la Cuenta AutomaCo:</strong> Credenciales (usuario y contraseña propios del sistema) necesarias para acceder a la aplicación.</li>
                                <li><strong className="text-dark">Perfiles de Correo Vinculados:</strong> Información técnica necesaria para mantener la conexión con las cuentas de correo electrónico que usted decida vincular voluntariamente dentro de la aplicación para la búsqueda de facturas.</li>
                                <li><strong className="text-dark">Información Tributaria:</strong> Archivos XML, JSON y PDF de sus facturas y documentos tributarios procesados.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">3. Uso de Datos de Google (Google User Data)</h3>
                            <p className="mb-3">Nuestra aplicación utiliza servicios de Google (OAuth) exclusivamente como una herramienta de integración para conectar cuentas de Gmail a perfiles específicos dentro de nuestro sistema.</p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>
                                    <strong className="text-dark">Propósito de la Conexión:</strong> La autenticación con Google no se utiliza para el inicio de sesión principal en AutomaCo. Se utiliza únicamente cuando usted decide crear un perfil de búsqueda dentro de la aplicación. Con su consentimiento explícito, AutomaCo accede a la cuenta de Google vinculada para:
                                    <ul className="list-circle pl-6 mt-2 space-y-1 text-sm">
                                        <li>Leer correos electrónicos (Gmail): Estrictamente para identificar, filtrar y descargar archivos adjuntos o enlaces relacionados con Documentos Tributarios Electrónicos (DTEs/Facturas).</li>
                                        <li>Mantener la conexión: Para permitir la ejecución de tareas de automatización programadas (como la búsqueda periódica de nuevas facturas) sin requerir su intervención constante.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="text-dark">Política de Uso Limitado (Limited Use Policy):</strong> El uso que hace AutomaCo de la información recibida de las API de Google se adhiere a la Política de Datos de Usuario de los Servicios API de Google, incluidos los requisitos de "Uso Limitado":
                                    <ul className="list-circle pl-6 mt-2 space-y-1 text-sm">
                                        <li>No utilizamos sus datos de Google para autenticar su identidad principal en nuestra plataforma.</li>
                                        <li>No compartimos sus datos de usuario de Google con terceros para fines publicitarios.</li>
                                        <li>No leemos contenido de correos personales; nuestros algoritmos operan automáticamente buscando únicamente patrones de facturación electrónica.</li>
                                        <li>No almacenamos el contenido de sus correos electrónicos, solo los archivos adjuntos (DTEs) extraídos que son relevantes para el servicio contable.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">4. Cómo compartimos su información</h3>
                            <p className="mb-3">No vendemos, comercializamos ni alquilamos su información de identificación personal a terceros. Solo compartimos información en las siguientes circunstancias:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-dark">Proveedores de servicios:</strong> Con herramientas de terceros necesarias para la operación técnica (ej. servidores de alojamiento, servicios de automatización como n8n) bajo estrictos acuerdos de confidencialidad.</li>
                                <li><strong className="text-dark">Requisitos legales:</strong> Si estamos obligados por ley o en respuesta a procesos legales válidos.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">5. Seguridad de los datos</h3>
                            <p>Implementamos medidas de seguridad técnicas y organizativas apropiadas (como encriptación y acceso restringido) para proteger sus datos contra el acceso no autorizado, la alteración o la destrucción.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">6. Sus derechos</h3>
                            <p>Usted tiene control total sobre los perfiles de Google vinculados. Puede eliminar un perfil de búsqueda en cualquier momento desde la interfaz de AutomaCo, lo cual detendrá inmediatamente el acceso a esa cuenta de Google sin afectar su acceso principal a nuestra aplicación. También puede revocar el acceso desde la configuración de seguridad de Google.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">7. Contacto</h3>
                            <p className="mb-2">Si tiene preguntas sobre esta política, contáctenos en:</p>
                            <ul className="list-none space-y-1">
                                <li><strong className="text-dark">Correo electrónico:</strong> <a href="mailto:automacofecetech@gmail.com" className="text-brand hover:underline">automacofecetech@gmail.com</a></li>
                                <li><strong className="text-dark">Sitio web:</strong> <a href="https://automaco.net" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">automaco.net</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className="my-12 border-gray-200" />

                {/* =========================================
                    TÉRMINOS Y CONDICIONES
                ========================================= */}
                <section>
                    <h1 className="text-4xl font-bold text-dark mb-4">Términos y Condiciones de Uso</h1>
                    <p className="text-sm text-gray-500 mb-8 font-medium">Última actualización: {lastUpdate}</p>

                    <div className="space-y-8 text-gray-600 leading-relaxed">

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">1. Aceptación de los Términos</h3>
                            <p>Al acceder y utilizar <strong className="text-dark">AutomaCo</strong>, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de los términos, no podrá acceder al servicio.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">2. Descripción del Servicio</h3>
                            <p>AutomaCo es una plataforma diseñada para facilitar la gestión, organización y descarga masiva de Documentos Tributarios Electrónicos (DTEs). El servicio permite a los usuarios registrados crear "Perfiles de Búsqueda" vinculando cuentas de correo electrónico externas para automatizar la recolección de facturas.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">3. Cuentas de Usuario</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-dark">Cuenta Principal:</strong> Para acceder al servicio, debe registrarse creando una cuenta en AutomaCo con sus propias credenciales. Usted es responsable de mantener la confidencialidad de su contraseña.</li>
                                <li><strong className="text-dark">Perfiles Vinculados (Google OAuth):</strong> Dentro de su cuenta, usted puede optar por vincular una o varias cuentas de Google para habilitar las funciones de automatización. Usted declara tener la autorización necesaria para vincular dichas cuentas de correo.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">4. Uso Aceptable</h3>
                            <p className="mb-3">Al utilizar la función de "Vincular Cuenta" o "Crear Perfil" con Google:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Usted autoriza a AutomaCo a acceder a la bandeja de entrada especificada únicamente con el fin de buscar y extraer documentos tributarios.</li>
                                <li>Entiende que esta vinculación es para poder iniciar el procedimiento de búsqueda de documentos tributarios.</li>
                                <li>AutomaCo no almacena su contraseña de Google; la conexión se realiza mediante tokens de acceso seguros (OAuth 2.0).</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">5. Propiedad Intelectual</h3>
                            <p>El sistema AutomaCo, su código fuente, logotipos (incluido el diseño del engranaje y documento "A"), diseño visual e interfaces son propiedad exclusiva de los desarrolladores de AutomaCo.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">6. Limitación de Responsabilidad</h3>
                            <p className="mb-3">AutomaCo se proporciona "tal cual" y "según disponibilidad".</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>No garantizamos que el servicio sea ininterrumpido o libre de errores.</li>
                                <li>No somos responsables de la exactitud de los datos contenidos dentro de los DTEs de terceros.</li>
                                <li>En ningún caso AutomaCo será responsable por daños indirectos, incidentales o consecuentes (incluyendo pérdida de datos o beneficios) que surjan del uso del servicio.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">7. Modificaciones al Servicio y Términos</h3>
                            <p>Nos reservamos el derecho de modificar o discontinuar el servicio en cualquier momento. También podemos actualizar estos términos; el uso continuo del servicio después de dichos cambios constituye su aceptación de los nuevos términos.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-dark mb-3">8. Ley Aplicable</h3>
                            <p>Estos términos se regirán e interpretarán de acuerdo con las leyes de El Salvador sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
};