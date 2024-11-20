// src/components/ImageUpload.js

import { useState } from 'react';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleUpload = async () => {
        if (!image) {
            alert('Please select an image to upload');
            return;
        }

        setIsLoading(true);

        const formData = new FormData();
        formData.append('file', image);
        //gon upload preset
        formData.append('upload_preset', 'j7lt6mev'); // Use your Cloudinary unsigned preset

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/dcjcdkgzy/image/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const jsonData = await response.json();
            console.log('Uploading:', image);
            console.log('Cloudinary response:', jsonData);
            setUploadedImageUrl(jsonData.secure_url); // Set the uploaded image URL to display it
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const uploadBtnClasses = `w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${isLoading ? 'cursor-not-allowed' : ''}`;

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Image</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                    Select an image
                </label>
                <input
                    type="file"
                    id="image"
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    onChange={handleImageChange}
                />
            </div>
            {preview && (
                <div className="mb-4">
                    <img src={preview} alt="Preview" className="w-full h-auto rounded-lg" />
                </div>
            )}
            {uploadedImageUrl && (
                <div className="mb-4">
                    <p className="text-green-600 font-bold">Image uploaded successfully!</p>
                    <img src={uploadedImageUrl} alt="Uploaded" className="w-full h-auto rounded-lg" />
                </div>
            )}
            <button
                onClick={handleUpload}
                className={uploadBtnClasses}
            >
                {isLoading ? 'Uploading...' : 'Upload'}
            </button>
        </div>
    );
};

export default ImageUpload;


