import MusicArticle from "../../../Articles/MusicArticle/MusicArticle";

const MusicScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24">
                <p className="text-[15px]">
                    Music Appreciation, 
                    Music Theory, 
                    American Music, 
                    Music Literature, 
                    Comparative Music, 
                    Aural Skills, 
                    Music Business, 
                    World Music, 
                    Symphony Orchestra, 
                    Chamber Orchestra, 
                    Chorale, 
                    Class Voice, 
                    Class Piano, 
                    Applied Music, 
                    Voice Performance, 
                    Community Band, 
                    Percussion Ensemble, 
                    Guitar Ensemble, 
                    Opera,  
                    Group Piano, 
                    Recording Techniques Piano Pedagogy, 
                    Elements of Musical Notation, 
                    European Music from the Middle Ages, Renaissance, and Baroque, 
                    Classical Music, 
                    Music on the Brain, 
                    Rock Music, 
                    Music of Latin America, 
                    African Music,   
                    Asian Music, 
                    Computer Music, 
                    Western Music, 
                    Music of Eygpt and Turkey, 
                    Modern Dance, 
                    Dance Practicum, 
                    Theatre, 
                    University Chorus and Singers, 
                    Dance and Society, 
                    Reflections of American Society on Stage and Screen, 
                    The African American Experience in the Performing Arts, 
                    Musicianship, 
                    Fundamentals of Acting, 
                    Production, 
                    Principles of Movement,  
                    Counterpoint, 
                    Music Technology, 
                    Lighting Design, 
                    Basics of Scene and Costume Design, 
                    Music in Twentieth-Century Britain, 
                    Stage Management, 
                    Directing Techniques, 
                    Playwriting, 
                    Audition Techniques, 
                    Public Relations for Performing Arts, 
                    Arts Education, 
                    Creative Theories and Criticism in Performing Arts, 
                    Bach and Handel, 
                    Music as Drama, 
                    Music and Human Life, 
                    Cultural Studies of Music, 
                    Hip-Hop, 
                    Sound Design and Digital Audio, 
                    Composition, 
                    Psychology of Music, 
                    Women and Music, 
                    Jazz, Ballet & Tap Dance, 
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <MusicArticle></MusicArticle>
                </div>
            </div>
        </div>
    );
};

export default MusicScope;