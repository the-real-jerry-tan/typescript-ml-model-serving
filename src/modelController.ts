/**
 * © 2024 Jerry Tan. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Jerry Tan
 * ("Confidential Information"). You shall not disclose such Confidential Information
 * and shall use it only in accordance with the terms under which this software
 * was distributed or otherwise published, and solely for the prior express purposes
 * explicitly communicated and agreed upon, and only for those specific permissible purposes.
 *
 * This software is provided "AS IS," without a warranty of any kind. All express or implied
 * conditions, representations, and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent
 * that such disclaimers are held to be legally invalid.
 */

import * as tf from '@tensorflow/tfjs-node';

// Pre-load a model (example is a mobilenet model for image classification)
const modelPath = 'file://model/mobilenet/model.json';
let model: tf.GraphModel;

export const loadModel = async () => {
    model = await tf.loadGraphModel(modelPath);
    console.log('Model loaded');
};

export const predictImage = async (req, res) => {
    try {
        const imageBuffer = req.body.image;
        const tensor = tf.node.decodeImage(imageBuffer, 3);
        const prediction = model.predict(tensor);
        res.json({ prediction: prediction });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
