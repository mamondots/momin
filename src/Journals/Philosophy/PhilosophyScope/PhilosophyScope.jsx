
import PhilosophyArticles from "../../../Articles/PhilosophyArticles/PhilosophyArticles";

const PhilosophyScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24">
                <p className="text-[15px]">
                    History of Philosophy from Descartes to Kant,
                    Knowledge and Reality,
                    Ethics,
                    Philosophy of Mind,
                    Philosophy of Science and Social Science,
                    Philosophy of Religion,
                    The Philosophy of Logic and Language,
                    Aesthetics,
                    Medieval Philosophy: Aquinas,
                    Medieval Philosophy: Duns Scotus and Ockham,
                    The Philosophy of Kant,
                    Post-Kantian Philosophy,
                    Theory of Politics,
                    Plato, Republic,
                    Frege, Russell, and Wittgenstein,
                    Formal Logic,
                    Philosophy of Physics,
                    Philosophy of Mathematics,
                    Jurisprudence,
                    The Rise of Modern Logic,
                    Biblical Studies,
                    Biblical Interpretation,
                    Christian History,
                    Islamic History and Culture,
                    Theological Foundations,
                    Christian Formation,
                    Faith and spirituality in today,
                    Theology of Everyday Life, Work & Vocation,
                    Exegesis,
                    Church Mission,
                    Ethics,
                    Kingdom of God,
                    Contemporary Trinitarian Theology,
                    Old Testament Theology,
                    New Testament Theology,
                    Communication Skills in Theology,
                    Hinduism,
                    Buddhism,
                    Indigenous Religions.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <PhilosophyArticles></PhilosophyArticles>
                </div>
            </div>
        </div>
    );
};

export default PhilosophyScope;