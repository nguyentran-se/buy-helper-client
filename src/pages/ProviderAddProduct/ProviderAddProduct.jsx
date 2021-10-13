import { CloudUploadOutlined } from '@mui/icons-material';
import {
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Modal,
  MenuItem,
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
  const [disabledOnSubmit, setDisabledOnSubmit] = useState(false);

  const handleOpenUploadWidget = () => {
    if (widget) {
      widget.open();
    }
  };

  const handleFormCancel = () => {
    reset(defaultValues);
    setImageInfo(null);
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
          // console.log('Done! Here is the image info: ', result.info);
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
      setDisabledOnSubmit(true);
      setTimeout(() => {
        setDisabledOnSubmit(false);
      }, 1500);
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
                  label={translate('NAME')}
                  required
                  placeholder={translate('ENTER') + ' ' + translate('NAME')}
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
              name="role"
              control={control}
              render={({ field: { onChange } }) => (
                <TextField
                  select
                  label={translate('CATEGORY')}
                  defaultValue="cate1"
                  name="category"
                  onChange={onChange}
                  fullWidth
                  required
                  // helperText=""
                >
                  {/* {roles.map((option) => ( */}
                  <MenuItem value="cate1">Cate1</MenuItem>
                  <MenuItem value="cate2">Cate2</MenuItem>
                  {/* ))} */}
                </TextField>
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
                  label={translate('PRICE')}
                  required
                  placeholder={translate('ENTER') + ' ' + translate('PRICE')}
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
                  label={translate('QUANTITY')}
                  required
                  placeholder={translate('ENTER') + ' ' + translate('QUANTITY')}
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
                  : translate('UPLOAD_IMAGE')}
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
                  {translate('SHOW_PREVIEW')}
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
            disabled={disabledOnSubmit}
          >
            {translate('CANCEL')}
          </Button>
          <Button
            variant="contained"
            size="large"
            type="submit"
            disabled={disabledOnSubmit}
          >
            {translate('SUBMIT')}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProviderAddProduct;
