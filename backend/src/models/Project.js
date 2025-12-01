import mongoose from 'mongoose';

const columnSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    label: { type: String, required: true },
    visible: { type: Boolean, default: true },
    editable: { type: Boolean, default: true }
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    settings: {
      projectName: { type: String, required: true },
      projectSubtitle: String,
      organizationName: String,
      bugTrackerUrl: String,
      defaultItemsPerPage: { type: Number, default: 25 }
    },
    columns: [columnSchema],
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const Project = mongoose.model('Project', projectSchema);
