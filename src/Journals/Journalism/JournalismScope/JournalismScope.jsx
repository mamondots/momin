import JournalismArticles from "../../../Articles/JournalismArticles/JournalismArticles";

const JournalismScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    Media & Terrorism,
                    Freedom of Expression,
                    Introductory and Advanced Reporting,
                    Reporting with Multimedia,
                    Journalism Theory and Practice,
                    International and U.S. Media Law,
                    Feature Writing,
                    Reporting Public Affairs,
                    Publication Design,
                    Reporting the Middle East,
                    Computer-Assisted Reporting Ethics and the News Media,
                    Government Secrecy,
                    Issues in Covering the Environment,
                    International Opinion Writing,
                    International Media Systems,
                    Science Journalism,
                    The Press and Society,
                    History of Journalism,
                    Reporting on Latin America,
                    Survey of Research Methods,
                    Tombstone Epitaph,
                    Media Coverage of International Crises,
                    U.S. Press Coverage of Latin America,
                    News Analysis,
                    International Reporting,
                    Documentary Film in America,
                    Journalism Practices in Europe and Africa,
                    Journalism in Asia,
                    Sport Journalism,
                    Media Ethics and Law,
                    Writing for Health Promotion,
                    American Journalism History,
                    Radio and Audio Reporting,
                    Visual Journalism,
                    Media Design,
                    Applied Public Relations,
                    Communications Writing,
                    Organizational Communication,
                    Television Production,
                    Media Technology,
                    Public Relations Principles and Practices,
                    Sound Production,
                    Public Relations Writing,
                    Advertising,
                    Cinema and Society,
                    Documentary Filmmaking,
                    Media Research Techniques,
                    On-Line Journalism,
                    Magazine Writing,
                    On-Line Public Relations,
                    Public Relations Management and Campaigns,
                    Public Opinion and Propaganda,
                    Television Production,
                    Broadcast News Gathering and Reporting,
                    Techniques of Layout and Design,
                    Ethics and the Media,
                    Technical and Scientific Writing.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <JournalismArticles></JournalismArticles>
                </div>
            </div>
        </div>
    );
};

export default JournalismScope;