import PhysicsArticles from "../../../Articles/PhysicsArticles/PhysicsArticles";


const PhysicsScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p className="text-[15px]">
                    Relativity,
                    Quantum Physics,
                    Statistical Physics,
                    Electromagnetism,
                    Classical Mechanics,
                    Experimental Physics,
                    Physics of Energy,
                    Nuclear Magnetic Resonance,
                    General Relativity and Astrophysics,
                    Physics in the 20th Century,
                    Forty-three Orders of Magnitude,
                    Physics of Solids,
                    String Theory,
                    Nuclear and Particle Physics,
                    Mathematical and Computational Physics,
                    Particle Accelerators,
                    Modern Astrophysics,
                    The Early Universe,
                    Fluid Physics,
                    Physics of the 21st Century,
                    Light, Vision and Optics,
                    Sound and Acoustics,
                    Physics for Natural and Behavioral Sciences,
                    Foundations of Astronomy,
                    Descriptive Astronomy,
                    Observational Techniques of Optical Astronomy,
                    History of Invention and Technology,
                    Intermediate Classical Mechanics,
                    Intermediate Electricity and Magnetism,
                    Thermal Physics,
                    Stellar Structure and Evolution,
                    Modern Cosmology,
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <PhysicsArticles></PhysicsArticles>
                </div>
            </div>
        </div>
    );
};

export default PhysicsScope;