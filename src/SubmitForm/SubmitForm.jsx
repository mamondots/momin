import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SubmitForm = () => {
    const [authorTwo, setAuthorTwo] = useState(false)
    const [authorTwos, setAuthorTwos] = useState(true)
    const addAuthorTwo = () => {
        setAuthorTwo(true)
        setAuthorTwos(false)
    }
    const removeAuthorTwo = () => {
        setAuthorTwo(false)
        setAuthorTwos(true)

    }


    const [authorThree, setAuthorThree] = useState(false)
    const [authorThrees, setAuthorThrees] = useState(true)
    const addAuthorThree = () => {
        setAuthorThree(true)
        setAuthorThrees(false)
    }
    const removeAuthorThrees = () => {
        setAuthorThree(false)
        setAuthorThrees(true)
    }

    const [authorFour, setAuthorFour] = useState(false)
    const [authorFours, setAuthorFours] = useState(true)
    const addAuthorFour = () => {
        setAuthorFour(true)
        setAuthorFours(false)
    }
    const removeAuthorFours = () => {
        setAuthorFour(false)
        setAuthorFours(true)
    }

    const [authorFive, setAuthorFive] = useState(false)
    const [authorFives, setAuthorFives] = useState(true)
    const addAuthorFive = () => {
        setAuthorFive(true)
        setAuthorFives(false)
    }
    const removeAuthorFives = () => {
        setAuthorFive(false)
        setAuthorFives(true)
    }



    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        fetch('http://localhost:5000/uploads', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    reset()
                    Swal.fire({
                        title: 'success!',
                        text: 'Your Articles Are Submited',
                        icon: 'success',
                        confirmButtonText: 'Finised'
                    })
                }
            })

        console.log(data)
    }

    return (
        <div className="mt-28 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-6">
            <h2 className="">The author should submit the paper via e-mail to the
                executive editor at <span className="text-[#91000D]">editor@aripd.net
                </span> or <br></br>you can send your paper by this submit form
            </h2>

            <div className="border lg:mx-60 my-12">
                <h2 className="text-center py-4 text-lg font-bold bg-[#91000D] text-[#fff]">Articles Information</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-4 space-y-2">
                    <div className="flex flex-col">
                        <label className="font-bold text-sm py-1 text-[#262626]">Title</label>
                        <input
                            {...register("title", { required: true })}
                            className="border py-2 px-2 outline-none rounded" type="text" placeholder="Enter Title..." />
                        {errors.title && <span className='text-[#91000D] text-sm py-1'>please Enter title</span>}
                    </div>

                    <div className="flex flex-col py-2 px-2 bg-[#91000c22] text-[#262626]">
                        <h2 className="font-bold text-[#91000D]">Author(s)</h2>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold text-sm py-1 text-[#262626]">Name of Author</label>
                        <input
                            {...register("author", { required: true })}
                            className="border py-2 px-2 outline-none rounded" type="text" placeholder="Enter Name..." />
                            {errors.author && <span className='text-[#91000D] text-sm py-1'>please Enter author</span>}
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold text-sm py-1 text-[#262626]">Institute/University</label>
                        <input
                            {...register("institute", { required: true })}
                            className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institute or University Name..." />
                            {errors.institute && <span className='text-[#91000D] text-sm py-1'>please Enter institute</span>}
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold text-sm py-1 text-[#262626]">Institutional Position</label>
                        <input
                            {...register("position", { required: true })}
                            className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institutional Position..." />
                            {errors.position && <span className='text-[#91000D] text-sm py-1'>please Enter institute position</span>}
                    </div>

                    <div className="relative">
                        <div className="flex space-x-2">
                            <div className="flex flex-col w-full">
                                <label className="font-bold text-sm py-1 text-[#262626]">Add First Email</label>
                                <input
                                    {...register("firstemail", { required: true })}
                                    className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="First Email..." />
                                    {errors.firstemail && <span className='text-[#91000D] text-sm py-1'>please Enter firstemail</span>}
                            </div>

                            <div className="flex flex-col w-full">
                                <label className="font-bold text-sm py-1 text-[#262626]">Add Second Email <span className="text-[#91000D]">(optional)</span></label>
                                <input
                                    {...register("secondemail")}
                                    className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="Second Email..." />
                            </div>
                        </div>
                    </div>


                    {/* Autthors two formate */}

                    <div className="w-full space-y-2">
                        <p className="text-[#072159] inline-block py-1 px-1 text-sm  font-bold cursor-pointer" onClick={addAuthorTwo}>{authorTwos && <span>Add Author's</span>}</p>
                        {authorTwo && <div className="bg-[#e9e7e7ad] px-8 py-2 rounded">
                            <h2 className="font-bold py-2">Authors Two</h2>

                            <div className="w-full space-y-2">

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Name of Author</label>
                                    <input
                                        {...register("author2")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Enter Name..." />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Institute/University</label>
                                    <input
                                        {...register("institute2")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institute or University Name..." />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Institutional Position</label>
                                    <input
                                        {...register("position2")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institutional Position..." />
                                </div>

                                <div className="relative">
                                    <div className="flex space-x-2">
                                        <div className="flex flex-col w-full">
                                            <label className="font-bold text-sm py-1 text-[#262626]">Add First Email</label>
                                            <input
                                                {...register("firstemail2")}
                                                className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="First Email..." />
                                        </div>

                                        <div className="flex flex-col w-full">
                                            <label className="font-bold text-sm py-1 text-[#262626]">Add Second Email <span className="text-[#91000D]">(optional)</span></label>
                                            <input
                                                {...register("secondemail2")}
                                                className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="Second Email..." />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center justify-between py-1">
                                <p className="text-[#072159] inline-block py-1 px-1 text-sm  font-bold cursor-pointer" onClick={addAuthorThree}>{authorThrees && <span>Add Author's</span>}</p>
                                <p onClick={removeAuthorTwo} className="text-[#91000D] cursor-pointer text-sm font-medium">Remove</p>
                            </div>
                        </div>}
                    </div>



                    {/* Autthors three formate */}

                    <div className="w-full space-y-2">
                        {authorThree && <div className="bg-[#e9e7e7ad] px-8 py-2 rounded">
                            <h2 className="font-bold py-2">Authors Three</h2>

                            <div className="w-full space-y-2">

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Name of Author</label>
                                    <input
                                        {...register("author3")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Enter Name..." />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Institute/University</label>
                                    <input
                                        {...register("institute3")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institute or University Name..." />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Institutional Position</label>
                                    <input
                                        {...register("position3")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institutional Position..." />
                                </div>

                                <div className="relative">
                                    <div className="flex space-x-2">
                                        <div className="flex flex-col w-full">
                                            <label className="font-bold text-sm py-1 text-[#262626]">Add First Email</label>
                                            <input
                                                {...register("firstemail3")}
                                                className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="First Email..." />
                                        </div>

                                        <div className="flex flex-col w-full">
                                            <label className="font-bold text-sm py-1 text-[#262626]">Add Second Email <span className="text-[#91000D]">(optional)</span></label>
                                            <input
                                                {...register("secondemail3")}
                                                className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="Second Email..." />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center justify-between py-1">
                                <p className="text-[#072159] inline-block py-1 px-1 text-sm  font-bold cursor-pointer" onClick={addAuthorFour}>{authorFours && <span>Add Author's</span>}</p>
                                <p onClick={removeAuthorThrees} className="text-[#91000D] cursor-pointer text-sm font-medium">Remove</p>
                            </div>
                        </div>}
                    </div>


                    {/* Autthors four formate */}

                    <div className="w-full space-y-2">
                        {authorFour && <div className="bg-[#e9e7e7ad] px-8 py-2 rounded">
                            <h2 className="font-bold py-2">Authors Four</h2>

                            <div className="w-full space-y-2">

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Name of Author</label>
                                    <input
                                        {...register("author4")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Enter Name..." />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Institute/University</label>
                                    <input
                                        {...register("institute4")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institute or University Name..." />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Institutional Position</label>
                                    <input
                                        {...register("position4")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institutional Position..." />
                                </div>

                                <div className="relative">
                                    <div className="flex space-x-2">
                                        <div className="flex flex-col w-full">
                                            <label className="font-bold text-sm py-1 text-[#262626]">Add First Email</label>
                                            <input
                                                {...register("firstemail4")}
                                                className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="First Email..." />
                                        </div>

                                        <div className="flex flex-col w-full">
                                            <label className="font-bold text-sm py-1 text-[#262626]">Add Second Email <span className="text-[#91000D]">(optional)</span></label>
                                            <input
                                                {...register("secondemail4")}
                                                className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="Second Email..." />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center justify-between py-1">
                                <p className="text-[#072159] inline-block py-1 px-1 text-sm  font-bold cursor-pointer" onClick={addAuthorFive}>{authorFives && <span>Add Author's</span>}</p>
                                <p onClick={removeAuthorFours} className="text-[#91000D] cursor-pointer text-sm font-medium">Remove</p>
                            </div>
                        </div>}
                    </div>


                    {/* Autthors five formate */}

                    <div className="w-full space-y-2">
                        {authorFive && <div className="bg-[#e9e7e7ad] px-8 py-2 rounded">
                            <h2 className="font-bold py-2">Authors Five</h2>

                            <div className="w-full space-y-2">

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Name of Author</label>
                                    <input
                                        {...register("author5")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Enter Name..." />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Institute/University</label>
                                    <input
                                        {...register("institute5")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institute or University Name..." />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold text-sm py-1 text-[#262626]">Institutional Position</label>
                                    <input
                                        {...register("position5")}
                                        className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institutional Position..." />
                                </div>

                                <div className="relative">
                                    <div className="flex space-x-2">
                                        <div className="flex flex-col w-full">
                                            <label className="font-bold text-sm py-1 text-[#262626]">Add First Email</label>
                                            <input
                                                {...register("firstemail5")}
                                                className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="First Email..." />
                                        </div>

                                        <div className="flex flex-col w-full">
                                            <label className="font-bold text-sm py-1 text-[#262626]">Add Second Email <span className="text-[#91000D]">(optional)</span></label>
                                            <input
                                                {...register("secondemail5")}
                                                className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="Second Email..." />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center justify-between py-1">
                                <p onClick={removeAuthorFives} className="text-[#91000D] cursor-pointer text-sm font-medium">Remove</p>
                            </div>
                        </div>}
                    </div>


                    <div className="space-y-2">
                        <div className="flex flex-col py-2 px-2 bg-[#91000c22] text-[#262626] my-2">
                            <h2 className="font-bold text-[#91000D] ">Corrisponding Author</h2>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-bold text-sm py-1 text-[#262626]">Name of Author</label>
                            <input
                                {...register("corrispondingauthor", { required: true })}
                                className="border py-2 px-2 outline-none rounded" type="text" placeholder="Enter Name..." />
                                {errors.corrispondingauthor && <span className='text-[#91000D] text-sm py-1'>please Enter author</span>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-bold text-sm py-1 text-[#262626]">Institute/University</label>
                            <input
                                {...register("corrispondinginstitute", { required: true })}
                                className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institute or University Name..." />
                                {errors.corrispondinginstitute && <span className='text-[#91000D] text-sm py-1'>please Enter institute</span>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-bold text-sm py-1 text-[#262626]">Institutional Position</label>
                            <input
                                {...register("corrispondingposition", { required: true })}
                                className="border py-2 px-2 outline-none rounded" type="text" placeholder="Institutional Position..." />
                                 {errors.corrispondingposition && <span className='text-[#91000D] text-sm py-1'>please Enter position</span>}
                        </div>

                        <div className="flex space-x-2">
                            <div className="flex flex-col w-full">
                                <label className="font-bold text-sm py-1 text-[#262626]">Add First Email</label>
                                <input
                                    {...register("corrispondingfirstemail", { required: true })}
                                    className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="First Email..." />
                                    {errors.corrispondingfirstemail && <span className='text-[#91000D] text-sm py-1'>please Enter email</span>}
                            </div>

                            <div className="flex flex-col w-full">
                                <label className="font-bold text-sm py-1 text-[#262626]">Add Second Email <span className="text-[#91000D]">(optional)</span></label>
                                <input
                                    {...register("corrispondingsecondemail")}
                                    className="border py-2 px-2 outline-none rounded w-full" type="email" placeholder="Second Email..." />
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold text-sm py-1 text-[#262626]">Contact Number</label>
                        <input
                            {...register("contact", { required: true })}
                            className="border py-2 px-2 outline-none rounded" type="text" placeholder="Your Number..." />
                             {errors.contact && <span className='text-[#91000D] text-sm py-1'>please Enter contact</span>}
                    </div>


                    <div className="flex flex-col">
                        <label className="font-bold text-sm py-1 text-[#262626]">Name of Journal</label>
                        <select {...register("journal", { required: true })} className="border py-2 space-y-2 px-2 outline-none" >
                            <option value="International Journal of Accounting and Taxation">International Journal of Accounting and Taxation</option>
                            <option value="Journal of Administrative Sciences and Policy Studies">Journal of Administrative Sciences and Policy Studies</option>
                            <option value="Journal of Agriculture and Environmental Sciences">Journal of Agriculture and Environmental Sciences</option>
                            <option value="Journal of Agriculture & Life Sciences">Journal of Agriculture & Life Sciences</option>
                            <option value="International Journal of Applied Science and Technology">International Journal of Applied Science and Technology</option>
                            <option value="Journal of Anthropology and Archaeology">Journal of Anthropology and Archaeology</option>
                            <option value="International Journal of Art and Art History">International Journal of Art and Art History</option>
                            <option value="Review of Arts and Humanities">Review of Arts and Humanities</option>
                            <option value="American International Journal of Biology">American International Journal of Biology</option>
                            <option value="Journal of Business Law and Ethics">Journal of Business Law and Ethics</option>
                            <option value="Journal of Business & Economic Policy">Journal of Business & Economic Policy</option>
                            <option value="International Journal of Business, Humanities and Technology">International Journal of Business, Humanities and Technology</option>
                            <option value="Business Research Reviwe">Business Research Reviwe</option>
                            <option value="International Journal of Business and Social Science">International Journal of Business and Social Science</option>
                            <option value="Journal of Chemistry and Biochemistry">Journal of Chemistry and Biochemistry</option>
                            <option value="Journal of Computer Science and Information Technology">Journal of Computer Science and Information Technology</option>
                            <option value="Review of Contemporary Business Research">Review of Contemporary Business Research</option>
                            <option value="American International Journal of Contemporary Research">American International Journal of Contemporary Research</option>
                            <option value="Journal of Economics and Development Studies">Journal of Economics and Development Studies</option>
                            <option value="Journal of Education and Human Development">Journal of Education and Human Development</option>
                            <option value="Journal of Education & Social Policy"> Journal of Education & Social Policy</option>
                            <option value="Journal of Engineering and Architecture">Journal of Engineering and Architecture</option>
                            <option value="Journal of Finance and Bank Management">Journal of Finance and Bank Management</option>
                            <option value="Journal of Foreign Languages, Cultures & Civilizations">Journal of Foreign Languages, Cultures & Civilizations</option>
                            <option value="International Journal of Gender & Women's Studies">International Journal of Gender & Women's Studies</option>
                            <option value="Journal of Geography and Earth Sciences">Journal of Geography and Earth Sciences</option>
                            <option value="Journal of Global Peace and Conflict">Journal of Global Peace and Conflict</option>
                            <option value="Journal of Human Resources Management and Labor Studies">Journal of Human Resources Management and Labor Studies</option>
                            <option value="International Journal of Humanities and Social Science">International Journal of Humanities and Social Science</option>
                            <option value="International Journal of Health Sciences">International Journal of Health Sciences</option>
                            <option value="Review of History and Political Science">Review of History and Political Science</option>
                            <option value="Journal of International Business and Economics">Journal of International Business and Economics</option>
                            <option value="Journal of International Relations & Foreign Policy">Journal of International Relations & Foreign Policy</option>
                            <option value="Journal of Islamic Banking and Finance">Journal of Islamic Banking and Finance</option>
                            <option value="Journal of Islamic Studies and Culture">Journal of Islamic Studies and Culture</option>
                            <option value="Review of Journalism & Mass Communication">Review of Journalism & Mass Communication</option>
                            <option value="Journal of Law and Criminal Justice">Journal of Law and Criminal Justice</option>
                            <option value="Journal of Library and Information Sciences">Journal of Library and Information Sciences</option>
                            <option value="International Journal of Linguistics & Communication">International Journal of Linguistics & Communication</option>
                            <option value="International Journal of Language & Literature">International Journal of Language & Literature</option>
                            <option value="International Journal of Language & Linguistics">International Journal of Language & Linguistics</option>
                            <option value="Journal of Management Policies and Practices">Journal of Management Policies and Practices</option>
                            <option value="Journal of Management Information System & E-commerce">Journal of Management Information System & E-commerce</option>
                            <option value="Journal of Marketing Management">Journal of Marketing Management</option>
                            <option value="American Review of Mathematics and Statistics">American Review of Mathematics and Statistics</option>
                            <option value="International Journal of Medicine and Pharmacy">International Journal of Medicine and Pharmacy</option>
                            <option value="International Multilingual Journal of Contemporary Research">International Multilingual Journal of Contemporary Research</option>
                            <option value="International Journal of Music and Performing Arts">International Journal of Music and Performing Arts</option>
                            <option value="Journal of Natural Sciences">Journal of Natural Sciences</option>
                            <option value="International Journal of Nursing">International Journal of Nursing</option>
                            <option value="International Journal of Philosophy and Theology">International Journal of Philosophy and Theology</option>
                            <option value="Journal of Physical Education and Sports Management">Journal of Physical Education and Sports Management</option>
                            <option value="International Journal of Physics and Astronomy">International Journal of Physics and Astronomy</option>
                            <option value="Journal of Power, Politics & Governance">Journal of Power, Politics & Governance</option>
                            <option value="Journal of Psychology & Behavioral Science">Journal of Psychology & Behavioral Science</option>
                            <option value="Public Policy and Administration Review">Public Policy and Administration Review</option>
                            <option value="Journal of Small Business and Entrepreneurship Development">Journal of Small Business and Entrepreneurship Development</option>
                            <option value="Journal of Social Science for Policy Implications">Journal of Social Science for Policy Implications</option>
                            <option value="American International Journal of Social Science">American International Journal of Social Science</option>
                            <option value="Social Science Reviwe">Social Science Reviwe</option>
                            <option value="Journal of Social Welfare and Human Rights">Journal of Social Welfare and Human Rights</option>
                            <option value="Journal of Sociology and Social Work">Journal of Sociology and Social Work</option>
                            <option value="Strategic Management Quarterly">Strategic Management Quarterly</option>
                            <option value="Journal of Tourism and Hospitality Management">Journal of Tourism and Hospitality Management</option>

                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold text-sm py-1 text-[#262626]">Abstract</label>
                        <textarea
                             
                            className="border py-2 space-y-2 px-2 outline-none rounded" cols="30" rows="6" placeholder="Write your abstract.."></textarea>
                            {errors.abstract && <span className='text-[#91000D] text-sm py-1'>please Enter abstract</span>}
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold text-sm py-1 text-[#262626]">Upload Paper <span className="text-[#072159]">(Ms Word/PDF)</span></label>
                        <input
                            {...register("pdf", { required: true })}
                            className="border py-2 space-y-2 px-2 outline-none rounded " type="file" name="" id="" />
                            
                    </div>
                    <div className="py-2">
                        <input className="py-2 px-8 bg-[#91000D] text-[#fff] rounded " type="submit" value="Submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SubmitForm;