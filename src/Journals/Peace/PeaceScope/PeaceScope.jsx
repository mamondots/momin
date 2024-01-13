import PeaceArticles from "../../../Articles/PeaceArticles/PeaceArticles";

const PeaceScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    United Nations, Peace and Security,
                    Key Issues in Peace and Conflict Studies,
                    Human Rights, Peace and Justice,
                    Gender and the Development of Peace,
                    Religion, War and Peace,
                    Conflict Resolution and Peacebuilding,
                    Reconciliation and Conflict Transformation,
                    Cultures of Violence,
                    Community Mediation: Theory and Practice,
                    Media Interventions in Conflict,
                    Peace and Conflict in Southeast Asia,
                    Transitional Justice and Peacebuilding,
                    Peace of Mind: The Psychology of Peace,
                    Conflict-Resolving Media,
                    Roots of Conflict, Violence and Peace,
                    Conflict Resolution,
                    A History of Peace Movements,
                    Issues of Justice and Peace,
                    Negotiation: Theories and Strategies,
                    War and Peace in Christian Theology,
                    Conflict Resolution Skills,
                    Ethics of Peacebuilding,
                    Gender in War and Peace,
                    Restorative Justice,
                    Voices of Liberation,
                    War and Peace in the Middle East,
                    Peacebuilding in Divided Societies,
                    Globalization: Economics & Social Justice,
                    Nonviolence,
                    Social Change: Promoting Peace,
                    Reconciliation and Justice,
                    Culture, Conflict, Negotiation,
                    Religion, Spirituality and Social Change.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <PeaceArticles></PeaceArticles>
                </div>
            </div>
        </div>
    );
};

export default PeaceScope;