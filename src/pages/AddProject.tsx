import React, { useState } from 'react';
import client from '../api/client';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [githubUrl, setGithubUrl] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [video, setVideo] = useState<File | null>(null);
    const [screenshots, setScreenshots] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!image) return alert('Please select an image');

        setLoading(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('link', link);
        formData.append('githubUrl', githubUrl);
        formData.append('tags', JSON.stringify(tags.split(',').map(tag => tag.trim())));
        formData.append('image', image);
        if (video) formData.append('video', video);
        if (screenshots) {
            Array.from(screenshots).forEach(file => {
                formData.append('screenshots', file);
            });
        }

        try {
            await client.post('/projects', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Project added successfully!');
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Failed to add project');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Add New Project</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-gray-300">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500 h-32"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 text-gray-300">Project Link</label>
                            <input
                                type="text"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-300">GitHub URL</label>
                            <input
                                type="text"
                                value={githubUrl}
                                onChange={(e) => setGithubUrl(e.target.value)}
                                className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Tags (comma separated)</label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="React, Node.js, Tailwind"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Project Image (Main)</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                            className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            accept="image/*"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Video Demo (Optional)</label>
                        <input
                            type="file"
                            onChange={(e) => setVideo(e.target.files ? e.target.files[0] : null)}
                            className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            accept="video/*"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Screenshots (Optional)</label>
                        <input
                            type="file"
                            onChange={(e) => setScreenshots(e.target.files)}
                            className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            accept="image/*"
                            multiple
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded font-bold transition duration-300 ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                    >
                        {loading ? 'Adding Project...' : 'Add Project'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProject;
