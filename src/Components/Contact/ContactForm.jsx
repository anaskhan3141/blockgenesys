import React, { useState } from 'react'
import serviceInfos from './ServiceInfo';
import { useTheme } from '../ThemeProvider'
import './ContactForm.css'

export default function ContactForm() {

    const { theme, toggleTheme } = useTheme()
    const [hoveredItem, setHoveredItem] = useState("default");
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [formData, setFormData] = useState({
        contactName: '',
        email: '',
        telegram: '',
        projectName: '',
        projectDescription: ''
    });

    const [errors, setErrors] = useState({
        contactName: '',
        email: '',
        telegram: '',
        projectName: '',
        projectDescription: ''
    });

    const [checkedItems, setCheckedItems] = useState({
        vCISO: true,
        Competitions: false,
        IncidentResponse: false,
        SmartContractSecurityReview: false,
        Web2SecurityReview: false,
    });

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });
    };

    const validate = () => {
        let valid = true;
        let newErrors = { contactName: '', email: '', telegram: '', projectName: '', projectDescription: '' };

        if (formData.contactName.length < 2) {
            newErrors.contactName = 'Name must be at least 2 characters';
            valid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Invalid email';
            valid = false;
        }

        if (formData.telegram.length < 5) {
            newErrors.telegram = 'Must be at least 5 characters';
            valid = false;
        }
        if (formData.projectName.length < 5) {
            newErrors.projectName = 'Must be at least 5 characters';
            valid = false;
        }
        if (formData.projectDescription.length < 5) {
            newErrors.projectDescription = 'Must be at least 5 characters';
            valid = false;
        }
        const checkedCount = Object.values(checkedItems).filter(value => value).length;
        if (checkedCount === 0) {
            newErrors.checkboxes = 'At least one checkbox must be checked';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const selectedServices = Object.keys(checkedItems).filter(key => checkedItems[key]);
            setIsSubmitted(true)
            setTimeout(() => {
                setIsSubmitted(false)
            }, 3000);

            //Handle the api or something here
            console.log('Selected services:', selectedServices);
            console.log('Form submitted successfully:', formData, checkedItems);

            // Reset form data
            setFormData({
                contactName: '',
                email: '',
                telegram: '',
                projectName: '',
                projectDescription: ''
            });

            setCheckedItems({
                vCISO: false,
                Competitions: false,
                IncidentResponse: false,
                SmartContractSecurityReview: false,
                Web2SecurityReview: false,
            });
        }
    };


    return (
        <section className='contact-section'>
            <div className="contact-container">

                <h2 id='contact-heading'>Client Request Form</h2>

                <div className="type-of-service">
                    <h3 className='contact-form-subheading'>Type of service</h3>
                    <p className='contact-form-heading-para'>Below are the core services Spearbit provides it's clients. Please select the service(s) that you'd like to request a quote for.</p>

                    <div className="checkbox-list">
                        <div className="column">
                            <label onMouseEnter={() => handleMouseEnter('vCISO')}>
                                <input
                                    className='type-checkbox'
                                    type="checkbox"
                                    name="vCISO"
                                    checked={checkedItems.vCISO}
                                    onChange={handleCheckboxChange}
                                />
                                vCISO
                            </label>
                            <label onMouseEnter={() => handleMouseEnter('Competitions')}>
                                <input
                                    className='type-checkbox'
                                    type="checkbox"
                                    name="Competitions"
                                    checked={checkedItems.Competitions}
                                    onChange={handleCheckboxChange}
                                />
                                Competitions
                            </label>
                            <label onMouseEnter={() => handleMouseEnter('IncidentResponse')}>
                                <input
                                    className='type-checkbox'
                                    type="checkbox"
                                    name="IncidentResponse"
                                    checked={checkedItems.IncidentResponse}
                                    onChange={handleCheckboxChange}
                                />
                                Incident Response
                            </label>
                        </div>
                        <div className="column">
                            <label onMouseEnter={() => handleMouseEnter('SmartContractSecurityReview')}>
                                <input
                                    className='type-checkbox'
                                    type="checkbox"
                                    name="SmartContractSecurityReview"
                                    checked={checkedItems.SmartContractSecurityReview}
                                    onChange={handleCheckboxChange}
                                />
                                Smart Contract Security Review
                            </label>
                            <label onMouseEnter={() => handleMouseEnter('Web2SecurityReview')}>
                                <input
                                    className='type-checkbox'
                                    type="checkbox"
                                    name="Web2SecurityReview"
                                    checked={checkedItems.Web2SecurityReview}
                                    onChange={handleCheckboxChange}
                                />
                                Web2 Security Review
                            </label>
                        </div>
                    </div>
                    {errors.checkboxes && <p className="error-message">{errors.checkboxes}</p>}
                    <div className="service-info" >

                        {
                            serviceInfos[hoveredItem]
                        }
                    </div>

                </div>

                <div className="contact-info">
                    <h3 className='contact-form-subheading'>Contact Information</h3>
                    <p className='contact-form-heading-para'>Please enter your name and the best email to reach you below.</p>

                    <form className="contact-form" >
                        <div className="form-group">
                            <label>Contact Name</label>
                            <input
                                type="text"
                                name="contactName"
                                value={formData.contactName}
                                onChange={handleChange}
                                className={errors.contactName ? 'error' : ''}
                                placeholder="Contact Name"
                                autoComplete='off'

                            />
                            {errors.contactName && <p className="error-message">{errors.contactName}</p>}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                placeholder="Email"
                                autoComplete='off'
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label>Telegram</label>
                            <input
                                type="text"
                                name="telegram"
                                value={formData.telegram}
                                onChange={handleChange}
                                className={errors.telegram ? 'error' : ''}
                                placeholder="Telegram"
                                autoComplete='off'
                            />
                            {errors.telegram && <p className="error-message">{errors.telegram}</p>}
                        </div>
                    </form>

                </div>

                <div className="project-info">
                    <h3 className='contact-form-subheading'>Project Information</h3>
                    <p className='contact-form-heading-para'>Please enter your project's name and a brief description of your project below as well as any additional information you'd like to include.</p>
                    <form className="project-form" onSubmit={handleSubmit} >
                        <div className="project-form-group">
                            <label>Project Name</label>
                            <input
                                type="text"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleChange}
                                className={errors.projectName ? 'error' : ''}
                                placeholder="A general description of your project"
                            />
                            {errors.contactName && <p className="error-message">{errors.projectName}</p>}
                        </div>
                        <div className="project-form-group">
                            <label>Project Description</label>
                            <textarea
                                type="textArea"
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleChange}
                                className={errors.projectDescription ? 'error' : ''}
                                placeholder="Project Description"
                            />
                            {errors.email && <p className="error-message">{errors.projectDescription}</p>}
                        </div>




                    </form>

                </div>

                <div className="submit" style={{justifyContent: isSubmitted? "space-between" : 'flex-end'}}>
                    {isSubmitted && (
                        <p id='success-message'>Form Successfully Submitted</p>

                    )}
                    <div className='submit-button' onClick={handleSubmit}>
                        Submit
                    </div>

                </div>
            </div>



        </section>

    )
}
