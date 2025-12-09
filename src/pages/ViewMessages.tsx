import { useState, useEffect } from 'react';
import client from '../api/client';
import { useNavigate } from 'react-router-dom';

interface Contact {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
}

const ViewMessages = () => {
    const [messages, setMessages] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await client.get('/contacts');
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
                alert('Erreur lors du chargement des messages');
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-cyan-400">Messages de Contact</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate('/add-project')}
                            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                            Ajouter un projet
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                            Retour à l'accueil
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center text-gray-400">Chargement des messages...</div>
                ) : messages.length === 0 ? (
                    <div className="text-center text-gray-400 bg-gray-800 p-8 rounded-lg">
                        Aucun message pour le moment.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-cyan-400">{message.subject}</h3>
                                        <p className="text-gray-400 text-sm mt-1">
                                            {formatDate(message.createdAt)}
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <span className="text-gray-500 text-sm">Nom:</span>
                                        <p className="text-white font-medium">{message.name}</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-500 text-sm">Email:</span>
                                        <p className="text-white font-medium">
                                            <a href={`mailto:${message.email}`} className="hover:text-cyan-400 transition-colors">
                                                {message.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-gray-500 text-sm">Message:</span>
                                    <p className="text-white mt-2 whitespace-pre-wrap">{message.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewMessages;
