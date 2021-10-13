import { CloudUploadOutlined } from '@mui/icons-material';
import {
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Modal,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
const defaultValues = { name: '', price: '', quantity: '' };
const ProviderAddProduct = () => {
  const { t: translate } = useTranslation();
  const { control, handleSubmit, reset } = useForm({ defaultValues });
  const [widget, setWidget] = useState(null);
  const [imageInfo, setImageInfo] = useState(null);
  const [openPreview, setOpenPreview] = useState(false);

  const handleOpenUploadWidget = () => {
    if (widget) {
      widget.open();
    }
  };

  const handleFormCancel = () => {
    reset(defaultValues);
  };
  /**
   * @implement UploadWidget
   */
  useEffect(() => {
    //https://demo.cloudinary.com/uw/#/ config
    const uploadWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
        folder: 'BuyHelper',
        cropping: true,
        maxImageWidth: 2000,
        maxImageFileSize: 2000000,
        sources: [
          'local',
          'url',
          'camera',
          'image_search',
          'google_drive',
          'facebook',
          'dropbox',
          'instagram',
          'shutterstock',
          'istock',
          'unsplash',
        ],
        multiple: false,
        defaultSource: 'local',
        // theme: 'purple',
      },
      (error, result) => {
        if (error) {
          setImageInfo(null);
        }
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          setImageInfo(result.info);
        }
      },
    );
    setWidget(uploadWidget);
  }, []);

  /**
   * @implement Submit data
   */
  const handleFormSubmit = (data) => {
    if (imageInfo) {
      data.url = imageInfo.url;
      console.log(data);
    }
  };

  return (
    <Box>
      <Typography variant="h5" component="h3" gutterBottom>
        {translate('ADD_PRODUCT')}
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{ mt: 3 }}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* <Stack direction="row" spacing={2} sx={{ mb: 2 }}> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  type="text"
                  label="Product Name"
                  required
                  placeholder="Enter product name"
                  fullWidth
                  autoFocus
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="price"
              control={control}
              a
              render={({ field: { onChange, value } }) => (
                <TextField
                  type="text"
                  label="Price"
                  required
                  placeholder="Enter price"
                  fullWidth
                  onChange={onChange}
                  value={value}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">VNĐ</InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          {/* </Stack> */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="quantity"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  type="text"
                  label="Quantity"
                  required
                  placeholder="Enter quantity"
                  fullWidth
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Button
              variant="contained"
              startIcon={<CloudUploadOutlined />}
              fullWidth
              size="large"
              onClick={handleOpenUploadWidget}
              disabled={!!imageInfo}
              sx={{ textTransform: 'none' }}
            >
              <Typography noWrap>
                {imageInfo
                  ? `${imageInfo['original_filename']}`
                  : 'Upload Image'}
              </Typography>
              {imageInfo && `.${imageInfo.format}`}
            </Button>
          </Grid>
          {imageInfo && (
            <>
              <Grid
                item
                xs={12}
                sm={2}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Button
                  variant="contained"
                  onClick={() => setOpenPreview(true)}
                >
                  Show preview
                </Button>
              </Grid>
              <Modal open={openPreview} onClose={() => setOpenPreview(false)}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                  }}
                >
                  <img
                    style={{ height: 350, objectFit: 'cover', width: 350 }}
                    src={imageInfo.url}
                    alt="preview"
                  />
                </Box>
              </Modal>
            </>
          )}
        </Grid>
        {/* {imageInfo && (
        )} */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 10, justifyContent: 'center' }}
        >
          <Button
            variant="outlined"
            color="error"
            size="large"
            onClick={handleFormCancel}
          >
            Cancel
          </Button>
          <Button variant="contained" size="large" type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProviderAddProduct;
