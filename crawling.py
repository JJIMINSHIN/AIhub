from google_images_download import google_images_download   #importing the library

response = google_images_download.googleimagesdownload()   #class instantiation

arguments = { 
    "keywords":
    "수지, 나연, 아이린, 공승연","limit":5,"print_urls":True, "format": "jpg"}   #creating list of arguments

paths = response.download(arguments)   #passing the arguments to the function
print(paths)   #printing absolute paths of the downloaded images