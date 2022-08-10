from google_images_download import google_images_download   #importing the library

response = google_images_download.googleimagesdownload()   #class instantiation

arguments = { 
    "keywords":
    "임윤아, 걸스데이 유라, 민효린","limit":30,"print_urls":True, "format": "jpg"}   #creating list of arguments
paths = response.download(arguments)   #passing the arguments to the function
print(paths)   #printing absolute paths of the downloaded images