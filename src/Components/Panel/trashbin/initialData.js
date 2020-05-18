import imgsvg from '../Icons/image-active.svg';
import soundsvg from '../Icons/sound-active.svg';
import videosvg from '../Icons/video-active.svg';
import textsvg from '../Icons/text-active.svg';


const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: imgsvg, name:"Image" },
        'task-2': { id: 'task-2', content: soundsvg, name:"Sound" },
        'task-3': { id: 'task-3', content: videosvg, name:"Video" },
        'task-4': { id: 'task-4', content: textsvg, name:"Text" },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Tools',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    columnOrder: ['column-1']
};

export default initialData;